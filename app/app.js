'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
   'myApp.service',
  'ui.bootstrap',
   'underscore',
   'ngResource',
   'myApp.directives'
]).

config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
      })

}]);
