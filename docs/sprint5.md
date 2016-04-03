# Sprint 5

## Overview

Now let's allow our users to edit the Album info.  

This sprint we will:

* make it so users can edit each Album
* add a `PUT /api/albums/:id` route to the server

> Note: as we go through this if you get stuck make use of the hints, your neighbors and the solutions.

> You must complete all of the previous sprint before starting this sprint. (excludes stretch challenges)

> In this sprint you might notice that our instructions are getting a little more succinct; we're hoping that you're starting to feel more comfortable and developing more resourcefulness and independence.  Still, if you get stuck, it's ok to ask a friend or your friendly neighborhood DIR, or instructor.

## Step 1

We're going to add a button that allows our users to edit an album.

1. Add a new button to each panel-footer

```html
<button class='btn btn-info edit-album'>Edit Album</button>`
```

1. Use jQuery to react to clicks on these buttons and determine the correct `Album._id`.  `console.log` it.

1. Replace the `Edit` button with a `Save Changes` button when clicked.

1. Also replace the major fields on the Album with `input` elements.


Confused? How about a wire-frame from the UX department to sort things out: 

##### Before clicking on "Edit Album"

![before clicking edit album](assets/albums/tunely_edit_album_example.png)

##### After clicking on "Edit Album"

![after clicking edit album](assets/albums/tunely_edit_album_after_click_example.png)


> Hint: you could have 2 buttons in place already, 1) "Edit", 2) "Save changes" and simply toggle their visibility with [$.toggle](http://api.jquery.com/toggle/)

> Note: this step could be a little tricky, especially if you want to display the current values in the input fields.  You'll have to get the text from the page, then replace the text with input elements.  You also have to worry about swapping


## Step 2

1. When `Save Changes` is clicked, react to it.  

1. Prepare an AJAX call to the server at `PUT /api/albums/:id`.


## Step 3

1. Add the `app.put` method on the server.  

1. Connect it to the database.

1. Make any final changes to your AJAX and test everything.

#### Step 3.5

1. Make sure you are removing the form fields and replacing them with updated data from the server.
  * You should do this when you get a response to your PUT request.
  * Use the response data from the PUT request.

> Hint: you already have a render function, ね(ne)?



## Challenges

1. When an edit is in progress disable or hide the other buttons.

1. Add a new modal instead of making changes directly in the album row.

1. Add a cancel button for the edits
