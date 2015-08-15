'use strict';
angular.module('myApp.home', ['ui.router'])

.controller('homeCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', function ($state, $scope, dataServices, $http, $window, _) {


    $scope.vidReady = 1;
    $scope.gotoVideoPage = function () {

        $state.go("video");
    }

    $scope.slickConfig = {
    	autoplay: true,
    	draggable: false,
    	autoplaySpeed: 3000,
    	method: {},
    	event: {
    		beforeChange: function (event, slick, currentSlide, nextSlide) {
    		},
    		afterChange: function (event, slick, currentSlide, nextSlide) {
    		}
    	}
    };

}]);