// albumsSongsController
var db = require('../models');

// app.get('/api/albums/:albumId/songs', controllers.albumsSongs.index);
function index(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log('responding with songs:', foundAlbum.songs);
    res.json(foundAlbum.songs);
  });
}

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
  index: index,
  create: create
};
