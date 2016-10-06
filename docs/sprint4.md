# Sprint 4

## Overview
This sprint we will:

* Reorganize our code with client-side routing and template files, using `ngRoute`.
* Add a client-side route and a template file  for viewing details of an album.

### Prerequisites

Before this sprint, you should:

* Be able to describe templates and layouts.
* Be ready to look up documentation for [`ngRoute` Module](https://docs.angularjs.org/api/ngRoute) and these features:
    - [`ngView` directive](https://docs.angularjs.org/api/ngRoute/directive/ngView)
    - [`$routeProvider`](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
    - [`$locationProvider`](https://docs.angularjs.org/api/ng/provider/$locationProvider)
    - [`$routeParams`](https://docs.angularjs.org/api/ngRoute/service/$routeParams)


##Instructions

####Configure routes with `ngRoute`

1. `ngRoute` is a separate Angular module. We've had its code included sneakily in the `<head>` of `index.html` since sprint 1 (muhahaha):

  ```html
    <script src="/vendor/angular-route/angular-route.min.js"></script>
  ```

   Now we just need to tell Angular that we'd like to use it in this app. In `app.js`, add the `ngRoute` module as a dependency available everywhere in our tunely app -- here's the syntax:

  ```js
  angular
    .module('tunely', ['ngRoute'])
    .controller('AlbumsIndexController', AlbumsIndexController);
  ```

1. `ngRoute` allows us to configure client-side routes in our app. We can define what we want to happen at every different (front-end) URL within our application. We'll configure these routes using Angular's `.config`, and we usually pass it in a function that's also just called `config`. Add in a `.config` line right after you set up the tunely app:

  ```js
  angular
    .module('tunely', ['ngRoute'])
    .config(config)
    .controller('AlbumsIndexController', AlbumsIndexController);
  ```
1. Let's define that `config` function. With `ngRoute`, we'll use `$routeProvider` to set up routes. We'll also use `$locationProvider` to help make cleaner URLs (by default, `ngRoute`d URLs have a `/#/` in them).  Both `$routeProvider` and `$locationProvider` are part of the `ngRoute` module. Copy the following `config` function into your `app.js`:

  ```js
  config.$inject = ['$routeProvider', '$locationProvider'];
  function config(   $routeProvider,  $locationProvider   ) {
    $routeProvider
      .when('/', {
        template: 'This template will show the homepage, with all ablums!',
        controllerAs: 'albumsIndexCtrl',
        controller: 'AlbumsIndexController'
      })
      .when('/albums/:id', {
        template: 'This template will show an album!',
        controllerAs: 'albumsShowCtrl',
        controller: 'AlbumsShowController'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
  ```

  Check what happens when you visit the `/` URL and a `/albums/:id` URL for some album in your browser now.

#### Refactor with Partials (Template Files)

1. So far, we've been putting all of our view code in `index.html`, but we'd like a bit more modularity. The `index.html` file will still have the `<head>` and any `<body>` content that doesn't change for different pages.

Most of our page content will move to HTML into files inside a `templates` folder. Create a `templates` folder inside of the project's `views` folder.

1. Inside of the `templates` folder, create an HTML file called `albums.html`. Move most of the HTML from `index.html` to this new file -- the entire div that starts `<div class="container" ng-controller="AlbumsIndexController as albumsIndexCtrl">`.

1. Update the `config` to use this template new file by giving its `templateUrl` on the `/` path:

    ```js
    .when('/', {
        templateUrl: '/templates/albums',
        controllerAs: 'albumsIndexCtrl',
        controller: 'AlbumsIndexController'
      })
    ```

1. Now that we have a template file, our `config` function will take care of setting which controller should be used on that page.  The `ng-controller` statement in `albums.html` has been made redundant; remove it.

1. Back in `index.html`, we've removed all our content!  We need to add a `div` that tells Angular where the partial template file for this URL should get loaded. In the same place where you removed the prior `div`, add this line:

  ```html
  <div ng-view></div>
  ```

1. Now if you reload your page, everything will look exactly the same!!!  

  That's not very exciting... Actually it kind of is! Now have a more modular app with the ability to expand into many different files.


#### Refactor with separate controller files  

1. Along these same lines, we can move the controller code out into its own file. To get started, create a `controllers` folder inside of `/public/scripts`.

1. Inside of the `controllers` folder, create a `AlbumsIndexController.js` file. Just like any other JavaScript file, we need to include this file in our `index.html`. Add it below where we load `app.js` so that the tunely app is created before we try to give it controllers.

  ```html
  <script src="scripts/app.js"></script>
  <script src="scripts/controllers/AlbumsIndexController.js"></script>
  ```
1. Move the contents of `AlbumsIndexController` into the new file. When all is said and done, our new `AlbumsIndexController.js` should look like this:

  ```js
  angular
    .module('tunely')
    .controller('AlbumsIndexController', AlbumsIndexController);

  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
    ...
  }
  ```
  Notice in the first line that we need to explicitly state what `module` this controller is a part of.  We *don't* restate tunely's dependencies.  We're referencing our app's module, not creating a new one.

1. Without `AlbumsIndexController`, `app.js` looks like this:

  ```js
  angular
    .module('tunely', ['ngRoute'])
    .config(config);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/albums',
        controllerAs: 'albumsIndexCtrl',
        controller: 'AlbumsIndexController'
      })
      .when('/albums/:id', {
        templateUrl: '/templates/albums-show',
        controllerAs: 'albumsShowCtrl',
        controller: 'AlbumsShowController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
  ```

1. Now make sure everything loads properly in your browser. Debug any issues.

#### Set up album show pages

1. Creating a new route: You may have noticed the `config` function refers to an `/albums/:id` route. This route is going to show us the details of individual albums.

1. This route will be accessible when the user clicks on an album name. To create this link, surround where you display the `albumName` with an `<a>` tag that links to `/albums/:id`. Use the `ng-href` directive for the url portion, like so

  ```html
  <a ng-href="albums/{{album._id}}">{{album.name}}</a>
  ```
1. Try clicking on this link in your browser, and notice the error messages.

1. Create two new files: `/views/templates/albums-show.html` and `/public/scripts/controllers/AlbumsShowController.js`. Don't forget to include `AlbumsShowController.js` in `index.html`.

1. These files will be similar to `albums.html` and `AlbumsIndexController.js`.  Reference those two files to create a basic structure for your new files and to check the connections between them.

1. In `AlbumsShowController.js`, we need to `GET` the data for one album. To do that, we need to grab the `_id` of that data object that we're interested in from the URL.

Angular provides us with a component called `$routeParams` that allows us access the URL path's parameters. To use `$routeParams`, we  `$inject` it in the controller. After it's injected, the parameters from the URL are aailable inside the `$routeParams`  object.

  ```js
  AlbumsShowController.$inject = ['$http', '$routeParams'];
  function AlbumsShowController (  $http,   $routeParams  ) {
    var vm = this;
    console.log($routeParams);

    $http({
      method: 'GET',
      url: '/api/albums/'+  // how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
      vm.album = json.data;
    });
  }
  ```

1. Add HTML to the view in `albums-show.html` to display all this data.  You should show each of the songs on the album's show page.
