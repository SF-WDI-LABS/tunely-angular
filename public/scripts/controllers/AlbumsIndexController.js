angular
  .module('tunely')
  .controller('AlbumsIndexController', AlbumsIndexController);

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController ($http) {
  var vm = this;
  vm.newAlbum = {};
  vm.newAlbum.genres = "rock, pop";
  vm.editing = true;

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(json) {
    vm.albums = json.data;
  });

  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum
    }).then(function successCallback(json) {
      vm.albums.unshift(json.data);
    })
  }

  vm.editAlbum = function (album) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+album._id,
      data: album
    }).then(function successCallback(json) {
      // don't need to do anything!
    });
  }

  vm.deleteAlbum = function (id) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ id
    }).then(function successCallback(json) {
      var index = findWithAttr(vm.albums, '_id', id);
      vm.albums.splice(index, 1);
    });
  }

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
    }
  }
}
