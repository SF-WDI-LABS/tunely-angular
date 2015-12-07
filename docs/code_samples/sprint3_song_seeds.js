/*
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  name: String,
  trackNumber: Number,
  length: Number  // of seconds
});
var Song = mongoose.model('Song', SongSchema);

module.exports = Song;
*/


var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1,
                   length: 240
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2,
                   length: 286
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3,
                   length: 230
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4,
                   length: 252
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5,
                   length: 212
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6,
                   length: 116
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7,
                   length: 255
});
