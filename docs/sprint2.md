# Sprint 2

## Overview

This sprint we will:
* focus on **Create**
* build a form to save Albums into our database
* add a `.post` method to our server so that it can receive the form's data

> Note: as we go through this if you get stuck make use of the hints, your neighbors and the solutions.

> You must complete all of the previous sprint before starting this sprint. (excludes stretch challenges)

## Step 1:

1. Open `views/index.html`

1. Edit the file adding a new container and row after the jumbotron.

1. Use bootstrap to create a form to input your Album info.  Follow the fields we've already used in our database.

> Hint: You can build your own form or use some [pre-made html](/docs/code_samples/sprint2_form.html).


## Step 2:

1. Edit your `app.js`. Use jQuery to capture the form values and serialize them.  `console.log` the output.

sample serialized form data:

```js
name=Marble+House&textinput=The+Knife&releaseDate=2006&genres=electronica%2C+synth+pop%2C+trip+hop
```

1. Clear the form after getting the data.

## Step 3:

Let's add a post route on the server now.  We already know that POST is used to create a new resource.  If we're following good conventions we'll use the same URL that we did to retrieve all the albums.

```
POST  /api/albums
```

1. In `server.js`, after the current `GET /api/albums` add a new route.  Start by just `console.log`ing the output and returning the same data you received as json.

1. Add body-parser to the server.

1. You can test this by either using AJAX from your browser's javascript console, or by using curl or postman.

curl:
```bash
 curl -X POST http://localhost:3000/api/albums --data "name=Marble+House&textinput=The+Knife&releaseDate=2006&genres=electronica%2C+synth+pop%2C+trip+hop
```

> Hint: If using postman to POST set the BODY type to x-www-form-urlencoded, then set key-value pairs.


## Step 4:

1. In the client-side JS, setup your form handler to make an AJAX post with the data.

1. Verify it's getting logged by the server when you submit.

1. On the server-side break the data we're getting in the `genre` field into an array.

> Hint: the `split` method may be handy here.

## Step 5:

1. Connect the POST route to the database.  Make sure you're returning the new album.

1. Test it!

> Hint: if you get stuck here take a look at the solutions.

## Step 6:

1. When your server returns JSON, display it on the page.  We already have a function to render it!

1. TEST ALL THE THINGS

![Test all the things](http://www.daedtech.com/wp-content/uploads/2012/12/TestAllTheThings-300x225.jpg)

## Stretch Challenges

1. Add HTML5 form validations to the form.  Ensure that all fields are filled.  

1. Change the form, replacing the textarea for genre with a field that has a button to add a new field for each genre.  See the mockup:

![add new field button](/docs/assets/images/add_new_field_button.png)

1. Convert the form to a modal and add a link to the right-side of the "Albums" header to open it!
