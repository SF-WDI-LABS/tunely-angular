## Sprint 2 Overview

Before this sprint, you should:  
- Have mock data in the controller of your Angular app, displayed in the view 
- Use two-way data binding to change objects in the controller based on user input
- Recall RESTful routing conventions and key components of requests: method, url, data, and query parameters
- Recognize the structure of `$http` requests

This sprint we will:  
- `GET` data from our back-end to our Angular front-end with `$http`  
- `POST` data from a form to save Albums into our database

## Inject `$http`

1. Not all of Angular is loaded into every module, controller, and template. Instead, you have to include or "inject" parts of Angular, or external Angular modules, into parts of your app where you want to use them.
1. [`$http`](https://docs.angularjs.org/api/ng/service/$http) is a core part of Angular. Still, to use it in our controller, we first need to tell Angular that we'd like to have it available by `inject`ing it. to do that, include this line above the controller function definition:

  ```javascript
  // app.js
  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
    ...
  }
  ```
The first line tells the controller that we'd like to have access to the `$http` module. The second line passes `$http` into the controller function.

## `GET` the data.
1. Delete the hard-coded `vm.albums` data from the previous sprint.
1. Use Angular's `$http` `GET` method to get data from the back-end. Make sure your back-end is populated with data by doing a quick check of the route in postman or your browser. If there's no data, run `node seed.js` to create some documents with pre-made data. `$http` looks very similar to jQuery's `$.ajax` with some small but important differences. Copy this code into your `AlbumsIndexController` function:

  ```js
	  $http({
	    method: 'GET',
	    url: // what goes here?
	  }).then(function successCallback(response) {
	    vm.albums = response.data;
	  }, function errorCallback(response) {
	    console.log('There was an error getting the data', response);
	  });
  ```
1. Now reload your page...


![img](./assets/images/sprint2-get.gif)


**Holy Guacamolé!** The page is populated with data from the server! **How amazing!**

## `POST` some data
1. Let's flesh out the `newAlbum` form. Create a form that has fields for Album Name and Artist Name. Optionally add fields for Genres (separated by commas) and Release Date.
1. Angular allows us to call functions from our `html`!  In `<form>`, let's add a `submit` handler like so

  ```html
  <form ng-submit="albumsIndexCtrl.createAlbum()">
  ```
Don't forget to have a button with `type="submit"` in the form!
1. `ng-submit` tells the `html` to call the `createAlbum()` function in the `albumsIndexCtrl` on submit of the function. Lastly we need to make a `createAlbum()` function.

  ```js
  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: // what goes here?
    }).then(function successCallback(response) {
      // how do we add the response data to our albums array?
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }
  ```
# 4.  KABMLAM!! our page is posting!

![img](./assets/images/sprint2-post.gif)

## Stretch challenges    
1. If you didn't before, add a `textarea` input for users to input genres as a comma-separated list.
1. Change the form by replacing the textarea for genre with a field that has a button to add a new field for each genre. See the mockup:

![](assets/images/add_new_field_button.png)
