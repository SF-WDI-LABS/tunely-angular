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
