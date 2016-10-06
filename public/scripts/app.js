/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.
AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController ($http) {
  var vm = this;
  vm.albums = [];
  vm.newAlbum = {};

  vm.newAlbum = {
      name: 'Viva Hate',
      artistName: 'Morrissey',
      genresAsString: "",
      genres: []
  };

  $http(
  {
    method: 'GET',
    url: '/api/albums',
  }).then(function(response)
  {
    vm.albums = response.data;
  });

  vm.createAlbum = function () {
    vm.newAlbum.genres = vm.newAlbum.genresAsString.split(',')
  $http({
    method: 'POST',
    url: '/api/albums',
    data: vm.newAlbum
  }).then(function successCallback(response) {
    vm.albums.push(response.data);
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}
}
