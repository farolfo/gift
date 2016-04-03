'use strict';

angular.module('gift.controllers', []);
angular.module('gift.services', []);
angular.module('gift.directives', []);

angular.module('gift', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'gift.controllers',
  'gift.services',
  'gift.directives'
]);

angular.module('gift').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
          })
        .state('results', {
            url: '/results?q',
            templateUrl: 'results/results.html',
            controller: 'ResultsCtrl'
        });
})

.run(function() {

});
