// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

/* hard-coded data */
var albums = [];
albums.push({
              artistName: 'Ladyhawke',
              name: 'Ladyhawke',
              releaseDate: '2008, November 18',
              genres: [ 'new wave', 'indie rock', 'synth pop' ]
            });
albums.push({
              artistName: 'The Knife',
              name: 'Silent Shout',
              releaseDate: '2006, February 17',
              genres: [ 'synth pop', 'electronica', 'experimental' ]
            });
albums.push({
              artistName: 'Juno Reactor',
              name: 'Shango',
              releaseDate: '2000, October 9',
              genres: [ 'electronic', 'goa trance', 'tribal house' ]
            });
albums.push({
              artistName: 'Philip Wesley',
              name: 'Dark Night of the Soul',
              releaseDate: '2008, September 12',
              genres: [ 'piano' ]
            });



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
