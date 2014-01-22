'use strict';

angular.module('devApp')
  .controller('SongsListCtrl', function ($scope, $filter, $routeParams, AlbumsSrv) {
    var isInvalidInput = function(field){
        return field.$dirty && field.$invalid;
    };

    var isValidInput = function(field){
        return field.$dirty && field.$valid;
    };

    AlbumsSrv.get()
      .success(function(response){
        $scope.album = $filter('filter')(response.albums, $routeParams.album)[0];
      })
      .error(function(){});

    $scope.newSong = {
        title: '',
        leadVocals: '',
        length: ''
    };

    $scope.orderKey = 'title';

    $scope.addSongToList = function(form){
        $scope.album.songs.push({
            'title': $scope.newSong.title,
            'id': $scope.newSong.title,
            'leadVocals': [ $scope.newSong.leadVocals ],
            'length': $scope.newSong.length,
            'moreinfo': true
        });

        $scope.clearForm(form);
    };

    $scope.getValidationClasses = function(field){
        return {
            'has-error': isInvalidInput(field),
            'has-success': isValidInput(field)
        };
    };

    $scope.clearForm = function(form){
        form.$setPristine();
        $scope.newSong = {
            title: '',
            leadVocals: '',
            length: ''
        };
    };
  });


  