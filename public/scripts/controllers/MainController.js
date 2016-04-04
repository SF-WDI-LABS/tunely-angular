var app = angular
  .module('tunely');
app
  .controller('MainController', MainController);

MainController.$inject = ['$http'];

function MainController ($http) {
  var vm = this;
  vm.newAlbum = {};
  vm.newAlbum.genres = "rock, pop";

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(json) {
    vm.albums = json.data;
  });

  vm.createAlbum = function () {
    console.log(vm.newAlbum)
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum
    }).then(function successCallback(json) {
      console.log(json.data);
      vm.albums.push(json.data);
    })
  }

  vm.deleteAlbum = function (id) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ id
    }).then(function successCallback(json) {
      console.log(json);
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
