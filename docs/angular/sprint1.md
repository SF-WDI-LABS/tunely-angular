## Overview

This sprint we will:
* focus on **Read**
* connect our front-end to a pre-built back-end.

-look at server.js to see the differences, namely
```js
// set up a route to get the templates, can you find the corresponding functions? 
app.get('/templates/:name', controllers.api.templates);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
```
