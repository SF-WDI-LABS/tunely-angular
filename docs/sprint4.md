## Overview

This sprint we will:
* Reorganize our code to use `ngRoute`
* Add a route for viewing details of an album

## Configuring our app with `ngRoute`
1. `ngRoute` is a separate Angular module. We already have it loaded in our `index.html`, so now we just need to tell Angular that we'd like to use it. In `app.js`, we can tell Angular that `ngRoute` is a dependency like so

  ```js
  angular
    .module('tunely', ['ngRoute'])
  ```
1. Once we do that, we now have access to `ngRoute` everywhere in our tunely app!
1. `ngRoute` allows us to do some route configuration to our app. That is, we can define what we want to happen at every different page within our application. To tell our app that we'd like to `config`ure it, modify your code like so:

  ```js
  angular
    .module('tunely', ['ngRoute'])
    .config(config)
    .controller('AlbumsIndexController', AlbumsIndexController);
  ```
1. Now we need to create a `config` function. `$routeProvider` comes with `ngRoute` and allows us to configure our routes. `$locationProvider` also comes with `ngRoute` allows us to get rid of the `/#/` in our url that you may have noticed.

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
1. This code is saying that when the user is at the `/` (a.k.a. home) route, Angular should use the view template located at `templates/albums` (hmm looks like we need to create that!) and the controller named `AlbumsIndexController` as `albumsIndexCtrl`. Before, we had specified the proper controller for our view within the html using `ng-controller` (`<div class="container" ng-controller="AlbumsIndexController as albumsIndexCtrl">`). Now, we'll specify our controller  here in the `config` function.

## Reorganize the code
1. So far we've been putting all of our view code in `index.html`, but we'd like a bit more modularity. Let's start refactoring our code! We want to move a lot of our `html` into files inside a `templates` folder. So, create a `templates` folder inside of the views folder. Inside of the `templates` folder, create an `html` file called `albums.html`. This is the file that Angular will look for when the user is at the `/` route, as defined above in our `config` function!
1. Let's move all of the code starting with the div that tells the view what controller to use (`<div class="container" ng-controller="AlbumsIndexController as albumsIndexCtrl">`) into our new `albums.html` file. Remember that since we're now defining what controller to use with what view in our `config` function, we can now remove the `ng-controller` statement in our `html` because it's redundant.
1. Now back in `index.html` we need to add a `div` that tells Angular where the template file should get loaded. In the same place where the code was that you just moved, add this line

  ```html
  <div ng-view></div>
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

## Create a new route
1. Creating a new route: You may have noticed that our `config` function refers to a `/:id` route. This route is going to show us the details of individual albums.
1. This route will be accessible when the user clicks on an album name. To create this link, surround where you display the `albumName` with an `<a>` tag that links to `/:id` like so

  ```html
  <a ng-href="{{album._id}}">{{album.name}}</a>
  ```
1. Try clicking on this link in your browser and notice the error messages.
1. Create two new files: `/views/templates/albums-show.html` and `/public/scripts/controllers/AlbumsShowController.js`. Don't forget to include `AlbumsShowController.js` in `index.html`.
1. We will set up these files similar to how we set up `albums.html` and `AlbumsIndexController.js`.
1. In `AlbumsShowController.js`, we need to `GET` the data for one album. To do that, we need to grab the `_id` of that data object that we're interested in from the url. Angular provides us with a module called `$routeParams` (very similar to Express's `req.params`) that allows us access the url path. To use it we need to `$inject` it in our controller and then use it to `GET` the data we're after like so:

  ```js
  AlbumsShowController.$inject = ['$http', '$routeParams'];

  function AlbumsShowController ($http, $routeParams) {
    var vm = this;
    vm.newSong = {};

    $http({
      method: 'GET',
      url: '/api/albums/'+$routeParams.id
    }).then(function successCallback(json) {
      vm.album = json.data;
    });
  }
  ```
1. Now add `html` to the view in `albums-show.html` to display all this data making sure to show (a.k.a. loop through) all the songs.
