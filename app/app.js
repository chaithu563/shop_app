'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.home',
   'myApp.admin',
   'myApp.service',
  'ui.bootstrap',
   'underscore',
   'ngResource',
   'myApp.component'
  
]).

config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('video', {
          url: '/video',
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
      });
    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'homeCtrl'
      })
    $stateProvider
      .state('video1', {
          url: '/video1',
          templateUrl: 'wirewax/wirewax.html'

      });
    $stateProvider
     .state('admin', {
         url: '/admin',
         templateUrl: 'admin/admin.html',
         controller: 'adminCtrl'

     })

}]);
