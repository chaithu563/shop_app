/// <reference path="header.html" />
angular.module('myApp.directives', [])

.directive('shopHeader', ['$compile', function ($compile) {

    return {

        templateUrl: 'header.html',
        restrict: 'E'
    
    }


}]);
