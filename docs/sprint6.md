# Sprint 6

## Overview

Now let's allow our users to update Songs.  We're going to create a new modal to do this.
That means, now might be a good time to take a look at the [bootstrap modal documentation](http://getbootstrap.com/javascript/#modals).

We'll create another modal in `index.html`.  Each time someone clicks a button to edit songs we'll populate it with the current songs' information.  This won't be too hard since we're just going to replace the modal body. (on the sample: `#editSongsModalBody`)

Here's a rough idea of what it could look like:

![Edit Songs Modal](/docs/assets/images/edit_songs.png)

> Make sure your modal's elements don't use the same ids as the other modal does.  id in html must be unique!

Objectives:
* allow songs to be edited
* allow songs to be deleted
* practice more with bootstrap modal's

## Step 1: modalize

1. Add a new modal to the page.  You can build your own OR [use the sample provided](/docs/assets/code_samples/sprint6_modal.html).

> If you're using the sample, take a look at the unique ids created on the elements.  We'll be using those later on.

1. Add a new button 'Edit Songs' in the panel-footer of each album row.

1. When 'Edit Songs' is clicked open the modal!

<detail><summary>opening a modal with js</summary>

`$('#fooModal').modal('show');`

</detail>

## Step 2: form

1. Develop a form for editing the song list.  It should be able to
  * delete a song
  * edit each song

1. Remember that in order to do a `DELETE /api/albums/:album_id/songs/:id` or a `PUT /api/albums/:album_id/songs/:id` you'll need those `id`s.  Embed them in `data-` attributes in your form.

1. You may want to use a `GET /api/albums/:album_id/songs` index route to get all songs for a particular album.  This is likely easier than retrieving incomplete data from the page.

## Step 3

1. Create the server-side routes for `DELETE /api/albums/:album_id/songs/:id` and `PUT /api/albums/:album_id/songs/:id`.

1. Write client-side AJAX to delete items when the delete button is clicked.

1. Make sure the deleted input is removed as well.

1. Test delete for songs.

1. Ensure that the song list on the page is updated as well.

> You can if you want re-draw


## Step 4 Update  

Since we're editing multiple songs at the same time; when we "Save All" we have to `$.ajax({ method: put })` for _EACH_ song.  That's multiple AJAX calls.  In a bigger app we might find another way to do this so we can submit them all in one `PUT`, but for now this is ok.

1. After the user clicks 'Save All' (or 'Update All'), make an AJAX `PUT` request for each song.  

1. After the user clicks 'Save All' (or 'Update All') close the modal.

1. Make sure you test everything.


## Step 5

1. Add functionality so that the user can create new songs and have them added to the list.


## Challenges

1. Add a _saving_ spinner or animation for each song when it is saving.

1. Save each song when the user leaves the input box.

1. Client-side validations: make sure track-numbers are numbers & unique.  In the form sort them by trackNumber.

1. Consider using Font Awesome.

1. Consider using a Bootstrap theme.

1. Server-side validations: make sure track-numbers are unique per album.  
