'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.datepic1',
   'myApp.datagrid',
    'myApp.nview',
   'myApp.service',
  'myApp.version',
  'ui.bootstrap',
   'underscore',
   'ngResource',
   'myApp.directives',
   'ui.grid'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/datagrid');
    //$stateProvider.otherwise({ redirectTo: '/view1' });


}]);
