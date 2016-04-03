'use strict';

angular.module('gift.directives')
  .directive('typer', function ($interval) {

        return {

            restrict: 'E',

            scope: {
                values: '='
            },

            templateUrl: 'components/typer/typer.html',

            link: function (scope, elem, attrs) {

                $('#typer').typed({
                    strings: scope.values,
                    typeSpeed: 50,
                    loop: true,
                    showCursor: false
                });
            }
        };
    });
