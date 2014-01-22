'use strict';

angular.module('devApp')
  .controller('AlbumsCtrl', function ($scope, AlbumsSrv) {
    AlbumsSrv.get()
      .success(function(response){
        $scope.albums = response;
      })
      .error(function(){});
  });