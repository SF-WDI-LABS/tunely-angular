# Sprint 3

## Overview

This sprint we will:
* add an embedded Song model to our Album model
* change the UI to allow users to see songs in the embedded model


> Note: as we go through this if you get stuck make use of the hints, your neighbors and the solutions.

> You must complete all of the previous sprint before starting this sprint. (excludes stretch challenges)

In this step we'll be changing our Album schema to have an embedded schema that contains songs.

The data from the database will look a little like this:

```js
{ genres: [ 'new wave', 'indie rock', 'synth pop' ],
    songs:
     [ { _id: 5665ff1678209c64e51b4e6a,
         trackNumber: 1,
         name: 'Swamped' },
       { _id: 5665ff1678209c64e51b4e64,
         trackNumber: 7,
         name: 'Tight Rope' } ],
    _id: 5665ff1678209c64e51b4e63,
    releaseDate: '2008, November 18',
    name: 'Comalies',
    artistName: 'Lacuna Coil',
    __v: 0 },
```

* note that `songs` has been added and is an array of other records!


## Step 1: Create the new model

1. Create a `models/song.js`

1. Open the file and create a model with properties like:

```js
  name: String,
  trackNumber: Number
```

1. Export the module and require it in `models/index.js`

1. Require `./song.js` in `./albums.js`

1. Alter the schema of Album to have a songs array that uses the `Song.schema`

## Step 2: Seeding

Let's add seeds.  Some basic data is [provided for you](/docs/code_samples/sprint3_song_seeds.js).
We're going to use this data for all albums for now, even though it's not accurate.

1. Copy the sample songs into `seed.js`

1. Write a `forEach` loop that adds the sample songs to each sampleAlbum in `seed.js`.  Compare your work to the sample above.

1. Run `node seed.js`

1. Fix any issues you encounter, until you can see that it's also adding songs for each album.

## Step 3: display

Let's go back to `app.js` and our html.  If you check the output of your AJAX call, you should see that we're already retrieving songs with each album.  Double-check this before you proceed.  

We'll change the client to add another `<li>` after the ones that are already being generated for each album.  We'll list our songs in there.
For now we're just going to make this super simple and output something like:

```html
<li class="list-group-item">
  <h4 class="inline-header">Songs:</h4>
  <span>	– (1) Swamped – (2) Heaven's a Lie – (3) Daylight Dancer – (4) Humane – (5) Self Deception – (6) Aeon – (7) Tight Rope – </span>
</li>
```


1. In `app.js`, create a new function `function buildSongsHtml(songs) {}`

1. Make buildSongsHtml return the HTML shown above (or similar).  It should take in an **array of songs**.  It should return an **HTML string**.

<details><summary>Hint: making a long dash &ndash; </summary>
Use `&ndash;`
</details>

<details><summary>Hint: `function buildSongsHtml(songs) {}`</summary>
```js  
function buildSongsHtml(songs) {
  var songText = "	&ndash; ";
  songs.forEach(function(song) {
     songText = songText + "(" + song.trackNumber + ") " + song.name + " &ndash; ";
  });
  var songsHtml  =
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Songs:</h4>" +
  "                         <span>" + songText + "</span>" +
  "                      </li>";
  return songsHtml;
}
```
</details>

1. Now call `buildSongsHtml` from inside `renderAlbum`. Use it to add the 4th `<li>` to each album.


## Step 4: Create Songs

Now let's create the functionality to add new songs.  To do this we're going to use a button to open a bootstrap modal.
Fortunately, the modal is already setup for you in `index.html`.  We will have to add a button to trigger it.  Also since the modal will be used for creating a song for any album we'll have to track that.  


We're going to do this by setting a data-attribute called `album-id` on the modal itself.  We will set this attribute when we display the modal.  


Let's pseudo-code this.

```
// this function will be called when someone clicks a button to create a new song
//   it has to determine what album (in the DB) the song will go to
function handleNewSongButtonClick() {
  // get the current album's id from the row the button is in
  // set the album-id data attribute on the modal (jquery)
  // display the modal
}
```


First we need to make sure we have the album id so we can use it later.  We'll set a data-attribute on each album row first so that each row has it's ID listed.

1. On the HTML for each album add a new data-album-id attribute to the top `<div class='row album'>`.

1. Set the value of that attribute to `album._id`.

1. Refresh the page and inspect the HTML in the browser.  Make sure the attribute is set and different for each one.

1. Add a button inside the panel-footer.

<detail><summary>button code</summary>
```js
<div class='panel-footer'>
  <button class='btn btn-primary add-song'>Add Song</button>
</div>
```
</detail>

1. Use jQuery to bind to these buttons' click events.

1. In your click event-handler get the current album row's data-album-id attribute.  

> Hint: you may want to read the jQuery documentation for `parents` and `data`

```js
$('#albums').on('click', '.add-song', function(e) {
    console.log('asdfasdfasdf');
    var id= $(this).parents('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
    console.log('id',id);
});
```

> The above code might be new to you.  We've added a second CSS-locator in the 'on' arguments.
> Because the .add-song component is not be on the page at document-ready our event-listener cannot bind to it.  
> Instead we'll bind to something above it like `body` or `#albums`.  As long as it's on the page when we add our event-listener
>  we will be able to capture the click and if it's on the '.add-song' handle it in our function.


1.  Set the data-attribute `album-id` on the `#songModal`.

<detail><summary>Hint: setting data-album-id</summary>

```js
$('#songModal').data('album-id', currentAlbumId);
```

</detail>

1. You can open a bootstrap modal by selecting it in jQuery and calling the `.modal()` function.  After setting the data-album-id attribute in your function, open the modal.

> Suggested reading: [See the bootstrap docs](http://getbootstrap.com/javascript/#modals-usage)

## Step 5:

So we should now have a working modal, but it doesn't do anything yet.
Let's add a function to handle the submit on the modal and POST the form data as a new song.

```pseudo
// call this when the button on the modal is clicked
function handleNewSongSubmit(e) {
  e.preventDefault();
  // get data from modal fields
  // POST to SERVER
  // clear form
  // close modal
  // update the correct album to show the new song
}
```

1. Create the `handleNewSongSubmit` function.  

1. We'll need the album-id in order to build the correct URL for the AJAX POST.  Our URL will eventually be like `http://localhost:3000/api/albums/:album_id/songs`.  In the `handleNewSongSubmit` function get the correct id from the modal.  Build the URL and save it as a variable.

1. Prepare the AJAX POST.  For data make sure you get the `.val` from the input fields.  Don't forget to call handleNewSongSubmit when the modal button is clicked.

> Hint: The modal doesn't actually have a form.  Use .val to get the data from the input fields and construct an object for your POST data.

## Step 6:

Now we need to add the POST route on the server.  We're going to be using request-params (URL parameters) this time.  

1. Build the `app.post` callback method for '/api/albums/:album_id/songs'.  Get the id from the request and find the correct album in the database.

1. Create the new Song and add it to the Album.  

1. Save your results and respond to the client with JSON.

> Hint: when connecting to the database make sure that Song has been exported in `models/index.js`

## Step 7:

Display the created song on the page.

1. Add a `GET /api/albums/:id` route and use that to re-render the altered album.

1. Make sure you remove the old copy from the page.

1. Close the modal afterward.

## Challenges

1. Add the remaining GET and POST routes to **Create** and **Read**.

```
GET /api/albums/:album_id/songs/:id
GET /api/albums/:album_id/songs
```

1. Add imageUrl as a property on Albums.  Update everything to use it!

1. Add track length as a field for each album.  


## Conclusion

You should now have the following API routes:

```
GET /api/albums
POST /api/albums
GET /api/albums/:id
POST /api/albums/:id/songs
```

You should also have a working app!  Congratulations!

![](http://i.giphy.com/wue4QtxncWuE8.gif)
