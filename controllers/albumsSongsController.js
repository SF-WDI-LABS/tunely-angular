// albumsSongsController
var db = require('../models');


// POST '/api/albums/:albumId/songs'
function create(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log(req.body);
    var newSong = new db.Song(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundAlbum.songs.push(newSong);
    foundAlbum.save(function(err, savedAlbum) {
      console.log('newSong created: ', newSong);
      res.json(newSong);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });
  });
}


module.exports = {
  create: create
};
