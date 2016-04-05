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
the first line tells the controller that we'd like to have access to the `$http` module and the second line passes `$http` into the function

- 
