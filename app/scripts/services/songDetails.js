'use strict';

angular.module('devApp')
  .service('SongDetailsSrv', function ($http) {
    var get = function(){
      return $http({
        url: '/data/songDetails.json',
        method: 'GET'
      });
    };
    return{
      get: get
    };
  });
