'use strict';
angular.module('myApp.home', ['ui.router'])

.controller('homeCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', function ($state, $scope, dataServices, $http, $window, _) {


    $scope.vidReady = 1;
    $scope.gotoVideoPage = function () {

        $state.go("video");
    }

}]);