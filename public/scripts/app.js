/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/albums').success(function (albums) {
    albums.forEach(function(album) {
      renderAlbum(album);
    });
  });

  $('#album-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/albums', formData, function(album) {
      console.log('album after POST', album);
      renderAlbum(album);  //render the server's response
    });
    $(this).trigger("reset");
  });


  // catch and handle the click on an add song button
  $('#albums').on('click', '.add-song', function(e) {
      console.log('add-song clicked!');
      var currentAlbumId = $(this).closest('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
      console.log('id',currentAlbumId);
      $('#songModal').data('album-id', currentAlbumId);
      $('#songModal').modal();  // display the modal!

  });

});



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album', album);
  var albumHtml = $('#album-template').html();
  var albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate(album);
  $('#albums').prepend(html);
}
