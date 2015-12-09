# Sprint 5

## Overview

Now let's allow our users to edit the Album info.  

This sprint we will:
* make it so users can edit each Album
* add a `PUT /api/albums/:id` route to the server

> Note: as we go through this if you get stuck make use of the hints, your neighbors and the solutions.

> You must complete all of the previous sprint before starting this sprint. (excludes stretch challenges)

## Step 1

We're going to add a button that allows our users to edit an album.

1. Add a new button to each panel-footer

```html
<button class='btn btn-info edit-album'>Edit Album</button>`
```

1. Use jQuery to react to clicks on these buttons and determine the correct `Album._id`.  `console.log` it.

1. Replace the `Edit` button with a `Save Changes` button when clicked.

1. Also replace the major fields on the Album with `input` elements.

> Hint: you could have 2 buttons in place already, 1) "Edit", 2) "Save changes" and simply toggle their visibility with [$.toggle](http://api.jquery.com/toggle/)

## Step 2

1. When `Save Changes` is clicked, react to it.  

1. Prepare an AJAX call to the server at `PUT /api/albums/:id`.


## Step 3

1. Add the `app.put` method on the server.  

1. Connect it to the database.

1. Make any final changes to your AJAX and test everything.



## Challenges

1. When an edit is in progress disable or hide the other buttons.

1. Add a new modal instead of making changes directly in the album row.

1. Add a cancel button for the edits
