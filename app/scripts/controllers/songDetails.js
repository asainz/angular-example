'use strict';

angular.module('devApp')
  .controller('SongDetailsCtrl', function ($scope, $location, $routeParams, SongDetailsSrv) {
    SongDetailsSrv.get()
      .success(function(response){
        $scope.song = response;
      })
      .error(function(){});

    $scope.hideDetails = function(){
      $location.path( '/albums/'+ $routeParams.album );
    };
  });