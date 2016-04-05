## Overview

This sprint we will:
* `GET` data from our back-end to our Angular front-end with `$http`

-let's get some real data to our client.
-remove the `vm.albums` hard-coded data in `app.js`
-to use `$http`, we first need to tell angular that we'd like to have it available in our controller by `inject`ing it. to do that, include this line above the controller function definition

```js
AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController ($http) {
  ...
}
```
the first line tells the controller that we'd like to have access to the `$http` module and the second line passes `$http` into the controller function

- `GET` the data.
1. delete the hard-coded `vm.album` data from before.
1. use Angular's `$http` `GET` method to get the data from the back-end. Make sure your back-end is populated with data. If not, run `node seed.js` to populate. `$http` looks very similar to jQuery's `$.ajax` with some small key differences. Copy this code into your `AlbumsIndexController` function.
```js
$http({
  method: 'GET',
  url: '/api/albums'
}).then(function successCallback(response) {
  vm.albums = response.data;
}, function errorCallback(response) {
  console.log('There was an error getting the data', response);
});
```
1. Now reload your page. WOW! the page is populated with data from the server! How easy...
