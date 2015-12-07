# Sprint 1

## Overview

This sprint we will:
* connect our _partially_ pre-built front-end to a back-end with hard-coded data.
* replace the hard-coded data with data stored in a mongo db


## Step 0:

Now would be a great time to explore the files provided for you.  In particular note:
* the html in public/index.html
* the incomplete server in server.js
* the included package.json

### Working through the lab

Use nodemon throughout the exercise to run your server.  
Continually verify that your browser console is displaying the `app.js loaded!` message on document-ready.

## Step 1:
**Goal** display hard-coded data from `app.js` on `index.html`
Let's start on the outside and work our way in.  

1. Open `index.html` and find the HTML for **one album**.  Copy it and then delete the HTML for all of the albums.  

1. Open `app.js` and edit the function renderAlbum to display one Album on the page.
You should use the HTML you just copied.  Build-up the HTML string and use jQuery to render it on the page.

1. Run the function on document-ready and give it `sampleAlbums[0]` (just one album).  Verify that the page looks right.

1. Update your code to use **all** the sampleAlbums.  Use `forEach`.

## Step 2:

We're going to add the following _index_ route on our server:

```
GET /api/albums
```

1. Open server.js and create a new route for `/api/albums`

1. Serve the hard-coded albums in server.js on `/api/albums`

1. In `app.js`, use `ajax` to get the albums.  Render them on the page.


## Step 3:

Let's setup the database now.

1. Use `npm` to install `mongoose`.

1. Open up the models directory

1. in `models/album.js` add a model for our albums.  You should be able to determine the datatypes based on the sample data in the server.

1. export Album in `models/album.js`

1. require and export Album in `models/album.js`


<details><summary>hint: albums.js</summary>

```js
//models/album.js
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);
```

</details>

<details><summary>hint: `models/index.js`</summary>

```js
module.exports.Album = require("./album.js");
```

</details>


## Step 4

Let's try seeding our database.

1. Move the hard-coded model data from `server.js` into `seed.js`.  You'll note there's already an empty variable there for you to use.  

1. Make sure `mongod` is running in a terminal.

1. Run node seed.js

1. Resolve any errors you encounter.

<details><summary>hint: error connect ECONNREFUSED</summary>
If you see an error like:

```
process.nextTick(function() { throw err; })
                              ^
Error: connect ECONNREFUSED 127.0.0.1:27017
```

It generally means that mongod is not running.
</details>
