'use strict';
angular.module('myApp', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
       .state('home', {
           url: '/home',
           templateUrl: 'view1/view1.html',
           controller: 'View1Ctrl'
       })

}])