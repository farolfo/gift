'use strict';

angular.module('gift.controllers')

  .controller('ResultsCtrl', ['$scope', '$state', '$stateParams', 'stagesAPI', function($scope, $state, $stateParams, stagesAPI) {

    $scope.q = $stateParams.q;

    if (!q) {
      $state.go('home');
    }
    
    stagesAPI.get({}, function(response) {
      $scope.stages = response.stages;
    });

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

  }]);
