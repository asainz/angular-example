'use strict';

angular.module('devApp')
  .controller('SongsListCtrl', function ($scope, $filter, $routeParams, AlbumsSrv) {
    AlbumsSrv.get()
      .success(function(response){
        $scope.album = $filter('filter')(response.albums, $routeParams.album)[0];
      })
      .error(function(){});
  });