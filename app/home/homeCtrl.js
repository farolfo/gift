'use strict';

angular.module('gift.controllers')

.controller('HomeCtrl', ['$scope', '$state', 'stagesAPI', function($scope, $state, stagesAPI) {

    $scope.searchBy = 'location';

    $scope.ngos = {data: [
       {
          name: 'UNICEF',
          imageUrl: 'https://raw.githubusercontent.com/farolfo/gift/master/assets/images/unicef-logo.jpg',
          class: "unicef",
          raised: 4563,
          country: 'USA',
          state: 'California'
       },
       {
          name: 'Water for Africa',
          imageUrl: 'https://raw.githubusercontent.com/farolfo/gift/master/assets/images/waterafrica.jpg',
          class: "water-for-africa",
          raised: 3032,
          country: 'USA',
          state: 'California'
       },
       {
          name: 'Greenpeace',
          imageUrl: 'https://raw.githubusercontent.com/farolfo/gift/master/assets/images/greenpeace.png',
          class: "greenpeace",
          raised: 10231,
          country: 'Argentina',
          state: 'Bs As'
       },
       {
          name: 'Cruz Roja',
          imageUrl: 'https://raw.githubusercontent.com/farolfo/gift/master/assets/images/cr.png',
          class: "cruz-roja",
          raised: 3121,
          country: 'USA',
          state: 'New York'
       }
    ]}.data;

    stagesAPI.get({},
       function ok(response) {
        $scope.stages = response.stages;
    }, function fail() {

    });

}]);
