'use strict';
angular.module('myApp.home', ['ui.router'])

.controller('homeCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', '$timeout', function ($state, $scope, dataServices, $http, $window, _, $timeout) {


    $scope.vidReady = 1;
    $scope.gotoVideoPage = function () {

        $state.go("video");
    }

    $scope.slickConfig = {
        dots: true,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 100,
        slidesToScroll: 1,
        //adaptiveHeight: true,
        //TODO: Track this bug to allow for variableWidth on next release: https://github.com/kenwheeler/slick/issues/790
        variableWidth: true,
        onInit: function () {
            jQuery(window).resize();
            console.log('slickcaroseal locded');
        },
        centerMode: true

    };
    $scope.dataLoaded = false;

    $timeout(function () {
        $scope.dataLoaded = true;
    });
    $scope.number = 1;

    $scope.items = [
         {imgSrc: '../app/img/movie1.jpg', label: 'label 1'},
         {imgSrc: '../app/img/movie2.jpg', label: 'label 2'},
          {imgSrc: '../app/img/movie3.jpg', label: 'label 3'},
           { imgSrc: '../app/img/movie4.jpg', label: 'label 4' }
           // {imgSrc: '../app/img/movie5.jpg', label: 'label 4'}
    ]  
//});

}]);