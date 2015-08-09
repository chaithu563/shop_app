'use strict';
angular.module('myApp.view1', ['ui.router'])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', '$http', '$window','_', function ($state, $scope, dataServices, $http, $window,_) {
    var blazerItem = "http://www.flipkart.com/protext-premium-solid-single-breasted-formal-men-s-blazer/p/itme5sh4tfxhf8hg?pid=BZRE5SH4C8PQMMWM&ref=L%3A-2203174991299721304&srno=p_31&query=blazer&otracker=from-search";
    var carItem = "http://www.zigwheels.com/newcars/Hyundai/Creta";
    var capItem = "http://www.flipkart.com/cravers-premium-solid-snapback-cap/p/itme5tpvrzmkgq6n?pid=CAPE5TPVUUCMADYY&ref=L%3A7670444542371712963&srno=p_2&query=cap&otracker=from-search";
    var DiningItem = "http://www.pepperfry.com/two-seater-dining-set-in-white-colour-by-ventura-1265359.html?type=sel";
    var CycleItem = "http://www.snapdeal.com/product/btwin-my-bike-7s-mountain/466642201#bcrumbLabelId:280";

    var items = [
                { id: 1, name: "Blazer",ST:11, ET:13, imgURL: "http://www.saymoontailors.com/uploads/21.jpg", redURL: blazerItem },
                { id: 2, name: "Cap",ST:38, ET:41, imgURL: "http://www.volkl.com/uploads/tx_voelkldata/fashion/VolklLogoCap_BLK_L_01.png", redURL: capItem },
                { id: 3, name: "car",ST:86, ET:87, imgURL: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/bmw-cars-picture.jpg", redURL: carItem },
                { id: 3, name: "Dinning",ST:34, ET:41, imgURL: "http://i1.pepperfry.com/media/catalog/product/t/w/800x880/two-seater-dining-set-in-white-colour-by-ventura-two-seater-dining-set-in-white-colour-by-ventura-mpm4hn.jpg", redURL: DiningItem },
                { id: 3, name: "cycle", ST:118, ET:145,imgURL: "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/18320/c/cycle_54a3b8fe76041._hero-electric-avior-amx-electric-cycle.jpg", redURL: CycleItem }

                ];

    $scope.isVisible = false;

    $scope.ShowItemsAvail = function (item) {
        document.getElementById('MyVideo1').pause();

        $scope.availItems = getAvailableItems();
        $scope.isVisible = true;
    }

    var getAvailableItems = function () {

        var curTime=Math.floor(document.getElementById('MyVideo1').currentTime);
        var filteredItems = items;
        filteredItems = _.filter(filteredItems, function (item) {
            return (item.ST <= curTime && item.ET >= curTime);
        });
        return filteredItems;
    }

    // Image click behaviour
    $scope.openInNewWindow = function (item) {
        $window.open(item.redURL);
    }
    //document.getElementById("MyVideo1").onplay(vidplay())

   
    document.getElementById("MyVideo1").onplaying = function () {
        $scope.isVisible = false;
        $scope.$apply();
    };

}]);