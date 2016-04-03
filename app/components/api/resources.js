'use strict';

var APIUrl = "http://localhost:3000";

angular.module('gift.services')

    .factory('stagesAPI', function ($resource) {
        return $resource(APIUrl + '/stages');
    });
