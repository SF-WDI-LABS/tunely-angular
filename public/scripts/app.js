/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

 

 angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

function AlbumsIndexController () {
  var vm = this;
  vm.newAlbum = {};

  vm.newAlbum = {
      name: 'License to Ill',
      artistName: 'Beastie Boys'
  };

  vm.albums = [
  {
    name: 'Coming Home',
    artistName: 'Leon Bridges'
  },
  {
    name: 'Are We There',
    artistName: 'Sharon Van Etten'
  },
  {
    name: 'The Queen is Dead',
    artistName: 'The Smiths'
  }
];
}