'use strict';

angular.module('gift.directives')
    .directive('awsImage', function () {

        return {

            restrict: 'A',

            link: function (scope, elem, attr) {
                elem.css('background', 'url( "' + attr.awsImage + '") no-repeat center center');
                //elem.css('background', 'url("http://stages-static.s3-website-us-east-1.amazonaws.com/images/' + attr.awsImage + '") no-repeat center center');
                elem.css('-webkit-background-size', 'cover');
                elem.css('-moz-background-size', 'cover');
                elem.css('-o-background-size', 'cover');
                elem.css('background-size', 'cover');
            }
        };
    });
