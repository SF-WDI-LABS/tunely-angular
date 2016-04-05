## Overview

This sprint we will:
* focus on **Read**
* connect our front-end to a pre-built back-end.

-look at server.js to see the differences, namely
```js
// set up a route to get the templates, can you find the corresponding functions? note that this is NOT an api route
app.get('/templates/:name', controllers.api.templates);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
```

-initialize angular App in `app.js`
```js
angular
  .module('tunely', [])
```
and in index.html
```html
<html lang="en" data-ng-app="tunely">
```
-create a controller. dot chain a controller after your app definition
```js
angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
```
-create the controller function with some initialized data
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
-tell the view that you'd like to use this controller in part of your view
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
-display the initialized data from your controller in the view
```html
<p>{{albumsIndexCtrl.newAlbum}}</p>
```
if you move this `<p>` tag outside of the div that defines the controller, what happens?
-let's dynamically edit the initialized data. add some input boxes
```html
<input type="text" class="form-control" placeholder="New album name" data-ng-model="albumsIndexCtrl.newAlbum.name">
<input type="text" class="form-control" placeholder="New album artist" data-ng-model="albumsIndexCtrl.newAlbum.artistName">
```
when you edit the content inside these input boxes, what happens?!?!?! this is called two-way data binding. in other words, when data changes in the view, it is automatically updated in the js and vice versa!! whoa

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
1. display the data in nicer way
1. sort the data using [`orderBy`](https://docs.angularjs.org/api/ng/filter/orderBy)
1. create a search bar to [`filter`](https://docs.angularjs.org/api/ng/filter/filter) the data
