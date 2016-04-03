'use strict';

angular.module('gift.directives')
    .directive('suggestion', function () {

        return {

            restrict: 'E',

            templateUrl: 'components/suggestion/suggestion.html',

            scope: {
                ngo: '=ngo'
            }
        };
    });
