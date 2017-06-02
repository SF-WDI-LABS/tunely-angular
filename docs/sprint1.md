## Sprint 1 Overview

For sprint 1 we will:  

- Mock up data in our client-side JavaScript and display it in our `view`.
- Use common Angular built-in directives such as `ng-repeat`.


### Getting Started on Sprint 1

Follow the branching instructions to create a branch for your work in your Tunely project.

### Instructions

1. Look at `server.js` to see the differences between what we've done before and the pieces that are unique to an Angular app.  We've made a few additions:

  ```js
  app.get('/templates/:name', function templates(req, res) {
    var name = req.params.name;
    res.sendFile(__dirname + '/views/templates/' + name + '.html');
  });
  ```

  ```js
  // ALL OTHER ROUTES (ANGULAR HANDLES)
  // redirect all other paths to index
  app.get('*', function homepage (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  ```

2. Let's add some code. Initialize an Angular app in `app.js`:

  ```js
  angular
    .module('tunely', []);
  ```
and also in `index.html`:

  ```html
  <html lang="en" ng-app="tunely">
  ```
3. Create a controller to control the albums index page. The syntax is below - just *dot-chain* a controller after your app definition.

  ```js
  angular
    .module('tunely', [])
    .controller('AlbumsIndexController', AlbumsIndexController);
  ```

4. Create the controller function with some initial data:  

  ```javascript
  function AlbumsIndexController () {
    var vm = this;
    vm.newAlbum = {};

    vm.newAlbum = {
        name: 'License to Ill',
        artistName: 'Beastie Boys'
    };
  }
  ```

5. Tell Angular that you'd like to use this controller for part of your view:  

  ```html
  <body>
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome to tunely</h1>
        <p>Your music binder!</p>
      </div>
    </div>

    <div class="container" ng-controller="AlbumsIndexController as albumsIndexCtrl">
      <!--html inside of here can use the information from the AlbumsIndexController-->
    </div>

  </body>
  ```

6. Display the initial data from your controller in the view:

  ```html
  <p><b>albumsIndexCtrl.newAlbum:</b> {{albumsIndexCtrl.newAlbum}}</p>
  ```

  > If you move this `<p>` tag outside of the div that defines the controller, what happens?


7. Let's dynamically edit the initial data. Add some input boxes:

  ```html
  <input type="text" class="form-control" placeholder="New album name" ng-model="albumsIndexCtrl.newAlbum.name">
  <input type="text" class="form-control" placeholder="New album artist" ng-model="albumsIndexCtrl.newAlbum.artistName">
  ```

  > When you edit the content inside these input boxes, what happens? This is called **two-way data binding**. When data changes in the view, it is automatically updated in the JavaScript, and vice versa. Whoa!

8. Let's add some more data to our controller:

  ```js
  vm.albums = [
    {
      name: 'Coming Home',
      artistName: 'Leon Bridges'
    },
    {
      name: 'Are We There',
      artistName: 'Sharon Van Etten'
    },
    {
      name: 'The Queen is Dead',
      artistName: 'The Smiths'
    }
  ];
  ```

9. We can use the angular *built-in directive* `ng-repeat` to help us display this data:

  ```html
  <div ng-repeat="album in albumsIndexCtrl.albums">
    {{album}}
  </div>
  ```

## Exercises
1. Display the data in a nicer way.
1. Sort the data using [`orderBy`](https://docs.angularjs.org/api/ng/filter/orderBy).
1. Create a search bar to [`filter`](https://docs.angularjs.org/api/ng/filter/filter) the data.
