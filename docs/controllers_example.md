## Server-side Example: separating route logic into controllers


#### Before Controllers

If you haven't seen this before you may be surprised to discover that the logic for every route doesn't have to be in server.js.  If you think about it though, it's obvious that in large apps server.js would become very long and hard to work with. _yuck_

#### Controllers and Resources

We're going to use the module pattern and create a module for each **controller** where we'll store all the route logic for that particular **resource**.  A **resource** can be thought of as being related to the endpoints in your routes.  For example, in Tunely we'll have a `/api/albums/:id` route.  `albums` is a **resource** here and we'll give it it's own **controller**.  You might later put `artists`, or `record_labels` in their own **controllers**.

#### Modules

You've already seen this pattern when using models!

1. We `export` the relevant objects from a file.  
1. We `require` those other files in an `index.js` and re-`export` everything as an object.
1. When we need to use those objects we `require` the directory containing those files (which reads `index.js` and retrieves that object).

The key here is to realize that `module.exports` always starts as an empty object `{}`.  

> If you `module.exports = { key: value }` you can export anything!

Let's look at an example:

```
├── server.js
└── models
    ├── index.js
    ├── quote.js
    └── author.js

```
 
```js
// models/quote.js
// ... some stuff
var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
```

```js
// models/author.js
// ... some stuff
var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
```

```js
// models/index.js
module.exports.Author = require('./author');
module.exports.Quote = require('./quote');
```

In the above `index.js` is exporting an object that looks like:

```js
{ 
  Author: AuthorModel,
  Quote: QuoteModel
}
```

Anywhere we import `models/index` or even `models` we get that object.

Let's take a look:

```js
server.js

var db = require('./models');

// later on you can
db.Author.save
db.Author.find
// etc
```

#### Applying this to controllers

Let's refactor this `server.js` to use controllers:

```
// server.js
app.get('/api/cards', function cardsIndex(req, res) { 
  // do index stuff 
}
app.post('/api/cards', function cardsCreate(req, res) { 
  // do post stuff
}
app.get('/api/cards/:id', function cardsShow(req, res) { 
  // do show stuff
}
```

> aww check out those beautiful RESTful routes!

##### New file structure

```
├── server.js
└── controllers
    ├── index.js
    └── cards.js
```

##### Refactor

```js
// controllers/cards.js

function index(req, res) {
  // do index stuff
}

function create(req, res) {
  // do post stuff
}

function show(req, res) {
  // do show stuff
}

var publicMethods = {
  index: index,
  create: create,
  show: show
}
module.exports = publicMethods;
```

Then in `index.js` we require and re-export.  
> This step may seem odd right now, but when you have 15 controllers, you'll thank us.

```js
// controllers/index.js
module.exports.cards = require('./cards');
module.exports.someOtherController = require('./someOtherController');
```

Finally in server.js we connect these together:

```js
// server.js
var controllers = require('./controllers');

app.get('/api/cards', controllers.cards.index);
app.post('/api/cards', controllers.cards.create);
app.get('/api/cards/:id', controllers.cards.show);
```

#### Wrap-up

Using this pattern it becomes clear where to find the logic for each route and your server.js file becomes much cleaner.  It also starts guiding us down the path of using RESTful routes since we're assigning these typical names like index, show, create, etc.  We can group by **resource** which makes it easier for future developers on the project to find what they need.

Your `server.js` file is effectively now a router.  When you work with other server architectures you will run into very similar patterns; knowing how this works will help you to adapt to other technologies you come across!

