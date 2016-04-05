angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  });

  vm.editSong = function (song) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+ $routeParams.id + '/songs/' + song._id ,
      data: song
    }).then(function successCallback(json) {
    })
  }

  vm.deleteSong = function (id) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ $routeParams.id + '/songs/' + id
    }).then(function successCallback(json) {
      var index = findWithAttr(vm.album.songs, '_id', id);
      vm.album.songs.splice(index, 1);
    })
  }

  vm.createSong = function () {
    $http({
      method: 'POST',
      url: '/api/albums/'+ $routeParams.id + '/songs',
      data: vm.newSong
    }).then(function successCallback(json) {
      vm.album.songs.push(json.data);
      vm.newSong = {};
    })
  }

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
    }
  }
}
