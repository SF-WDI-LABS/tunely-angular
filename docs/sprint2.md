## Sprint 2 Overview
This sprint we will:  
- `GET` data from our back-end to our Angular front-end with `$http`  
- `POST` data from a form to save Albums into our database

1. We will add real data to our client.
1. All of Angular is not loaded in every module, controller, and template. Instead, you have to include or "inject" the parts of angular or external angular modules into the parts of your app where you want to use them.
1. To use `$http`, we first need to tell angular that we'd like to have it available in our controller by `inject`ing it. to do that, include this line above the controller function definition

  ```javascript
  AlbumsIndexController.$inject = ['$http'];

  function AlbumsIndexController ($http) {
    ...
  }
  ```
The first line tells the controller that we'd like to have access to the `$http` module. The second line passes `$http` into the controller function.

## `GET` the data.
1. Delete the hard-coded `vm.album` data from the previous sprint.
1. Use Angular's `$http` `GET` method to get data from the back-end. Make sure your back-end is populated with data. If not, run `node seed.js` to populate with pre-made data. `$http` looks very similar to jQuery's `$.ajax` with some small key differences. Copy this code into your `AlbumsIndexController` function:

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
1. Let's flesh out the `newAlbum` form. Create a form that has fields for Album Name and Artist Name; optionally Genres (separated by commas) and Release Date.
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
1. Change the form by replacing the textarea for genre with a field that has a button to add a new field for each genre. See the mockup:

![](assets/images/add_new_field_button.png)
