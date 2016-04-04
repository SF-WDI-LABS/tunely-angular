/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

angular
  .module('tunely', ['ngRoute'])

  .config(function ($routeProvider, $locationProvider) {
    // HOME
    $routeProvider
      .when('/', {
        templateUrl: 'templates/albums',
        controllerAs: 'vm',
        controller: 'AlbumsIndexController'
      })
      .when('/:id', {
        templateUrl: 'templates/albums-show',
        controllerAs: 'vm',
        controller: 'AlbumsShowController'
      })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  });
