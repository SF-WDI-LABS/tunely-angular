## Overview

This sprint we will:
* Reorganize our code to use `ngRoute`
* Add a route for viewing details of an album

1. `ngRoute` is a separate Angular module. We already have it loaded in our `index.html`, so now we just need to tell Angular that we'd like to use it. in `app.js`, we can tell Angular that `ngRoute` is a dependency like so
```js
angular
  .module('tunely', ['ngRoute'])
```
1. once we do that, we now have access to `ngRoute` everywhere in our tunely app
1. `ngRoute` allows us to do some route configuration to our app. to tell our app that we'd like to `config` it, modify your code like so:
```js
angular
  .module('tunely', ['ngRoute'])
  .config(config)
  .controller('AlbumsIndexController', AlbumsIndexController);
```
1. now we need to create a `config` function. `$routeProvider` comes with `ngRoute` and allows us to configure our routes. `$locationProvider` also comes with `ngRoute` allows us to get rid of the `/#/` in our url that you may have noticed.
```js
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/albums-show',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
```
1. this code is saying that when the user is at the `/` aka home route, that Angular should use the view template located at `templates/albums` (hmm looks like we need to create that!) and the controller named `AlbumsIndexController` as `albumsIndexCtrl`. so instead of writing what controller our view should use in the `html` like we had before (`<div class="container" data-ng-controller="AlbumsIndexController as albumsIndexCtrl">`), we write it here in the `config` function.
1. so far we've been putting all of our view code in `index.html`, but we'd like a bit more modularity. let's start refactoring our code! we want to move a lot of our `html` into files inside a `templates` folder. so, create a `templates` folder inside of the views folder. inside of the `templates` folder, create an `html` file called `albums.html`. This is the file that Angular will look for when the user is at the `/` route, as defined above in our `config` function!
1. let's move all of the code starting with the div that tells the view what controller to use (`<div class="container" data-ng-controller="AlbumsIndexController as albumsIndexCtrl">`) into our new `albums.html` file. Remember that since we're now defining what controller to use with what view in our `config` function, we can now remove the `data-ng-controller` statement in our `html` because it's redundant.
1. now back in `index.html` we need to add a `div` that tells Angular where the template file should get loaded. In the same place where the code was that you just moved, add this line
```html
<div data-ng-view></div>
```
1. Now if you reload your page, everything will look exactly the same :). Wait. That's not very exciting... Actually it kind of is! It means that we now have a more modular app with the ability to expand into many different files.



1. Along these same lines, we can move out controller code into its own file. To do this, create a `controllers` folder inside of `/public/scripts`. Inside of the `controllers` folder, create a `AlbumsIndexController.js` file. Just like any other `js` file we need to include this file in our `index.html` below where we load `app.js`.
```html
<script src="scripts/app.js"></script>
<script src="scripts/controllers/AlbumsIndexController.js"></script>
```
1. In our new file we will move all the `AlbumsIndexController` stuff. When all is said and done, our new `AlbumsIndexController.js` should look like this:
```js
angular
  .module('tunely')
  .controller('AlbumsIndexController', AlbumsIndexController);

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController ($http) {
  ...
}
```
Notice in the first line that we need to explicitly state what `module` this controller is a part of.
1. So without the `AlbumsIndexController` stuff, make sure your `app.js` looks like this
```js
angular
  .module('tunely', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/albums-show',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
```
1. Now make sure everything is loading properly in your browser. Phew.



Creating a new route.
1. You may have noticed that our `config` function refers to a `/:id` route. This route is going to show us the details of individual albums.
