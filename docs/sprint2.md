# Sprint 2

### Overview

This sprint we will:  
- `GET` data from our back-end to our Angular front-end with `$http`  
- `POST` data from a form to save Albums into our database

### Prerequisites

Before this sprint, you should:  
- Have mock data in the controller of your Angular app, displayed in the view.
- Use two-way data binding to change objects in the controller based on user input.
- Recall RESTful routing conventions and key components of requests: method, url, and data or query parameters.
- Recognize the structure of `$http` requests.


## Getting Started on Sprint 2

To get started on a new tunely-angular sprint, we'll have you check out the solutions for the previous sprint. Remember to follow the branching instructions!


## instructions

### Inject `$http`.

1. We want to use the [`$http`](https://docs.angularjs.org/api/ng/service/$http) service in our controller, so `inject` it:

  ```javascript
  // app.js
  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
    ...
  }
  ```

### `GET` albums data.
1. Empty out the hard-coded `vm.albums` array from the previous sprint.

1. Use Angular's `$http` method to get data from the back-end. Make sure your back-end is populated with data by doing a quick check of the route in postman or your browser. If there's no data, run `node seed.js` to create some.

  <details><summary>click for code hint</summary>
  ```js
    // inside controller
    $http({
      method: 'GET',
      url: // what goes here?
    }).then(function successCallback(response) {
      // what is the structure of this response?
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  ```
  </details>

1. Make sure the albums in the response will be displayed on the page. How were the hard-coded albums displayed on the page? Using that code as an inspiration, add a line that will update which albums are displayed on the page, once the GET request response comes back successfully.


1. Now reload your page...


![img](./assets/images/sprint2-get.gif)


**Holy Guacamolé!** Your page should be populated with data from the server! **How amazing!**

### `POST` a new album.
1. Let's flesh out the `newAlbum` form. Create a form that has fields for Album Name and Artist Name. Optionally add fields for Genres (separated by commas) and Release Date.  Also add a submit button (with `type="submit"`) in the form!

1. In the `<form>` tag,  add a `submit` event handler:

  ```html
  <form ng-submit="albumsIndexCtrl.createAlbum()">
  ```

  This tells Angular to call the `createAlbum()` function in the `albumsIndexCtrl` when this form is submitted.

1. We'd better make a `createAlbum()` function!

  ```js
  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: // what goes here?
    }).then(function successCallback(response) {
      // what is the structure of this repsonse?
      // how do we add the response data to our albums array?
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }
  ```

**KABMLAM!! our page is posting!**

![img](./assets/images/sprint2-post.gif)

## More Challenges  

1. If you didn't before, add a `textarea` input for users to input genres as a comma-separated list.  Process this data into the format the server expects.

1. Add an input box that the user can type in to filter the list of albums on the page. (Hint: look up angular's built-in filtering!)  This works great when there are few enough albums that we can show them all on the page at once.

1. As an alternate way for users to narrow down albums, add a search form that the user can use to search the database for albums.  This will require modifying your server code. Try to do it without adding a route.

1. Change the form by replacing the textarea for genre with a field that has a button to add a new field for each genre. See the mockup:

![](assets/images/add_new_field_button.png)
