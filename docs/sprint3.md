## Overview

This sprint we will:
* Add the ability to `update` and `delete` albums

1. Let's start with delete. In the `index.html`, make a delete button inside of the `data-ng-repeat` for albums.
1. To attach an event handler to this button, we can use Angular's `data-ng-click` attribute like so

  ```html
  <button class='btn btn-danger' data-ng-click="albumsIndexCtrl.deleteAlbum(album._id)">Delete Album</button>
  ```
1. This tells Angular to run the function `deleteAlbum()` that's defined in `albumsIndexCtrl` when the button gets clicked. Note that this function passes in the `album._id` as an argument.
1. Now that we have a button that knows to run a function on click, we need to create that function. Inside of our `AlbumsIndexController` define a `deleteAlbum` function like so

  ```js
  vm.deleteAlbum = function (id) {
    $http({
      method: 'DELETE',
      url: // what goes here?
    }).then(function successCallback(json) {
      var index = findWithAttr(vm.albums, '_id', id);
      vm.albums.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
  ```
1. To update the view with the deleted album, here is a handy function that let's us find the album in our `vm.albums` array that has the same `_id` as the album that was just deleted.

  ```js
  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
    }
  }
  ```
1. Does it work? Does it work?

1. Let's move on to update. What we want is to have an edit button for each album that, when clicked, turns the data fields for that album into input fields that can be edited.
1. Luckily, Angular gives us `data-ng-show` and `data-ng-hide`. Say hello to your new best friends.
1. First, let's create an edit button. Put it next to your delete button.

  ```html
  <button class='btn btn-info' data-ng-hide="editing" data-ng-click="editing = true">Edit Album</button>
  ```
  This button has a click handler that when clicked, rather than calling a function like we saw with delete, sets a variable called `editing` to `true`. It also knows to hide itself when `editing` is `true`. So basically, right now, this button hides on click. Weird...
    > This `editing` variable is an interesting variable. Since it's not defined in our controller, it's only defined within it's current `scope`, which, in this case, is a single loop in our `data-ng-repeat` loop.

1. Since we've gotten our edit button to hide on when `editing` is true, we can create a save button to show when `editing` is false. Like so

  ```html
  <button class='btn btn-success' data-ng-show="editing" data-ng-click="albumsIndexCtrl.editAlbum(album); editing = false">Save Changes</button>
  ```
  What does this button do?
1. Now we need to figure out how to replace our data with input fields on click of the edit button. Here's an example of how we can do this:

  ```html
  <input data-ng-show="editing" data-ng-model="album.name" type="text" class="form-control input-md">
  ```
  Do this for the rest of the inputs.
1. You also need to `data-ng-hide` the data fields when `editing` is true.
1. How does it look? Does it all hide and show as expected?
1. The last step is to write the `editAlbum()` function. Go!
