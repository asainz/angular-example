'use strict';

angular.module('devApp')
  .service('AlbumsSrv', function ($http) {
    var get = function(){
      return $http({
        url: '/data/albums.json',
        method: 'GET'
      });
    };
    return{
      get: get
    };
  });
