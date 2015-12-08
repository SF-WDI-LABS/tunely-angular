var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Album = require('./album');

module.exports.Album = Album;
