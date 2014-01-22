'use strict';

angular.module('devApp')
    .directive('mainNavbar', function(){
        return {
            replace: true,
            restrict: 'A',
            templateUrl: 'views/partials/main-header.html'
        };
    });