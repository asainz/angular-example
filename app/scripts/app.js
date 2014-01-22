'use strict';

angular.module('devApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/albums', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl'
      })
      .when('/albums/:album', {
        templateUrl: 'views/songsList.html',
        controller: 'SongsListCtrl'
      })
      .when('/albums/:album/:song', {
        templateUrl: 'views/songDetails.html',
        controller: 'SongDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/albums'
      });
  });
