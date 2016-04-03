# Sprint 6

## Overview

Now let's allow our users to update Songs.  We're going to create a new modal to do this.
That means, now might be a good time to take a look at the [bootstrap modal documentation](http://getbootstrap.com/javascript/#modals).

We'll create another modal in `index.html`.  Each time someone clicks a button to edit songs we'll populate it with the current songs' information.  This won't be too hard since we're just going to replace the modal body. (on the sample: `#editSongsModalBody`)

Here's a rough idea of what it could look like:

![Edit Songs Modal](/docs/assets/images/edit_songs.png)

> Make sure your modal's elements don't use the same ids as the other modal does.  *id in html must be unique*!

Objectives:

* allow songs to be edited
* allow songs to be deleted
* practice more with bootstrap modal's

> Hey! Good work, partner!
> You're practically an express cowboy/cowgirl now!  That means you're at home on the range (aka DOM) and we're gonna ask you to solve problems on your own in this sprint.  The web is still a bit of the wild-west, and things can get outta hand mighty quick!  Y'all are gonna have to think outside of the lasso and solve issues on yer own!

![cowboy](https://m.popkey.co/e5a568/7grXg.gif)

## Step 1: modalize

1. Add a new modal to the page.  You can build your own OR [use the sample provided](/docs/code_samples/sprint6_modal.html).

> If you're using the sample, take a look at the unique ids created on the elements.  We'll be using those later on.

1. Add a new button 'Edit Songs' in the panel-footer of each album row.

1. When 'Edit Songs' is clicked open the modal!

	<details><summary>opening a modal with js</summary>
	
	```js
	// STUDENT! memorizify this!
	$('#fooModal').modal('show');
	```
	
	</details>

## Step 2: form

1. Develop a form for editing the song list.  It should be able to 
	(1) delete a song (2) edit each song. Your form will need to be put into an HTML string (write a function for this).

1. Remember that in order to do a `DELETE /api/albums/:album_id/songs/:id` or a `PUT /api/albums/:album_id/songs/:id` you'll need those `id`s.  Embed them in `data-` attributes in your form.

1. You may want to use a `GET /api/albums/:album_id/songs` index route to get all songs for a particular album.  This is likely easier than retrieving incomplete data from the page.

> A sample HTML string for the form <a href="/docs/code_samples/sprint6_inline_form.js">is provided for you</a>.

## Step 3

1. Create the server-side routes for `DELETE /api/albums/:album_id/songs/:id` and `PUT /api/albums/:album_id/songs/:id`.

1. Write client-side AJAX to delete items when the delete button is clicked.

1. Make sure the deleted input is removed as well.

1. Test delete for songs.

1. Ensure that the song list on the page (the main album row that contains this song) is updated as well.

> You may want to re-retrieve the songs rather than trying to parse the current album `<li>` content.
> It would be a good idea to make a function for this, it'll be useful in the next step.

## Step 4 Update  

Let's allow users to save their edits.

1. After the user clicks a 'Save' button, make an AJAX `PUT` request for the edited song.  

1. Update the page with the changed song.

1. Make sure you test everything.

1. Make sure the modal closes when the close button is clicked.


## Step 5

1. Add functionality so that the user can create new songs and have them added to the list from within the modal.


## Challenges

1. Add a _saving_ spinner or animation for each song when it is saving.

1. Save each song when the user leaves the input box.

1. Client-side validations: make sure trackNumbers are numbers & unique.  In the form sort them by trackNumber.

1. Consider using a Bootstrap theme.

1. Consider using Font Awesome.

1. Server-side validations: make sure track-numbers are unique per album.  
