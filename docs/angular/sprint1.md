## Overview

This sprint we will:
* Mock up some data in our client-side `js` and display it in our view.
* Learn some common Angular built-in directives such as `ng-repeat`.

-Look at server.js to see the differences between what we've done before and the pieces that are unique to an Angular app, namely:
```js
// set up a route to get the templates, can you find the corresponding functions? note that this is NOT an api route
app.get('/templates/:name', controllers.api.templates);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
```

-Initialize Angular App in `app.js`
```js
angular
  .module('tunely', [])
```
and in index.html
```html
<html lang="en" data-ng-app="tunely">
```
-Create a controller to control the albums index page. The syntax is below - just dot chain a controller after your app definition
```js
angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
```
-Create the controller function with some initialized data
```js
function AlbumsIndexController () {
  var vm = this;
  vm.newAlbum = {};

  vm.newAlbum = {
      name: 'Viva Hate',
      artistName: 'Morrissey'
  };
}
```
-Tell the view that you'd like to use this controller in part of your view
```html
<body>
  <div class="jumbotron">
    <div class="container">
      <h1>Welcome to tunely</h1>
      <p>Your music binder!</p>
    </div>
  </div>

  <div class="container" data-ng-controller="AlbumsIndexController as albumsIndexCtrl">
    <!--html inside of here can use the information from the AlbumsIndexController-->
  </div>

</body>
```
-Display the initialized data from your controller in the view
```html
<p><b>albumsIndexCtrl.newAlbum:</b> {{albumsIndexCtrl.newAlbum}}</p>
```
if you move this `<p>` tag outside of the div that defines the controller, what happens?
-let's dynamically edit the initialized data. add some input boxes
```html
<input type="text" class="form-control" placeholder="New album name" data-ng-model="albumsIndexCtrl.newAlbum.name">
<input type="text" class="form-control" placeholder="New album artist" data-ng-model="albumsIndexCtrl.newAlbum.artistName">
```
When you edit the content inside these input boxes, what happens?!?!?! This is called two-way data binding. In other words, when data changes in the view, it is automatically updated in the JS and vice versa!! Whoa!

-let's add some more data to our controller
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
-we can use the angular *built-in directive* `daga-ng-repeat` to help us display this data
```html
<div data-ng-repeat="album in albumsIndexCtrl.albums">
  {{album}}
</div>
```

-exercises
1. display the data in a nicer way
1. sort the data using [`orderBy`](https://docs.angularjs.org/api/ng/filter/orderBy)
1. create a search bar to [`filter`](https://docs.angularjs.org/api/ng/filter/filter) the data
