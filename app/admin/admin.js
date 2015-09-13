'use strict';
angular.module('myApp.admin', ['ui.router'])

.controller('adminCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', '$timeout', '$interval', function ($state, $scope, dataServices, $http, $window, _, $timeout, $interval) {
  
    //{ id: 6, name: "cycle", x: 56, y: 40, ST: 9, ET: 10, imgURL: "cycle.jpg", redURL: CycleItem, price: 29000 },

    var blazerItem = "http://gayamstore.myshopify.com/products/black-blazer";
    var carItem = "http://gayamstore.myshopify.com/products/car";
    var capItem = "http://gayamstore.myshopify.com/products/cap";
    var DiningItem = "http://www.pepperfry.com/two-seater-dining-set-in-white-colour-by-ventura-1265359.html?type=sel";
    var CycleItem = "http://gayamstore.myshopify.com/products/cycle";
    var glassItem = "http://gayamstore.myshopify.com/products/construction-glass";
    var tableItem = "http://gayamstore.myshopify.com/products/office-table";
    var chairItem = "http://gayamstore.myshopify.com/products/office-chair";
    var cupItem = "http://gayamstore.myshopify.com/products/cup";
    var shirtItem = "http://gayamstore.myshopify.com/products/men-t-shirt";

    var mentradItem = "http://gayamstore.myshopify.com/products/men-traditional-dress";
    var spectItem = "http://gayamstore.myshopify.com/products/spectacles";
    var wallDocrItem = "http://gayamstore.myshopify.com/products/wall-decorator";
    var ladiesDressItem1 = "http://gayamstore.myshopify.com/products/ladies-party-dress";
    var ladiesDressItem2 = "http://gayamstore.myshopify.com/products/punjabee-dress";
    var ladiesDressItem3 = "http://gayamstore.myshopify.com/products/punjabee-dress";

    var menStoleItem = "http://gayamstore.myshopify.com/products/men-stole";
    var tileItem = "http://gayamstore.myshopify.com/products/tiles";
    var poojaItems = "http://gayamstore.myshopify.com/products/pooja-items";
    var goldRingItem = "http://gayamstore.myshopify.com/products/gold-ring";
    var watchItem = "http://gayamstore.myshopify.com/products/watch";
    var chainItem = "http://gayamstore.myshopify.com/products/gold-chain";
    var phoneUrl = "http://gayamstore.myshopify.com/products/iphone-4s";
    var sofaItem = "http://gayamstore.myshopify.com/products/sofa";
    var bhudhaItem = "http://gayamstore.myshopify.com/products/bhudha-item";
    var sareeItem = "http://gayamstore.myshopify.com/products/saree";
    var earringItem = "http://gayamstore.myshopify.com/products/ear-ring";

    var items = [
				{ id: 6, name: "cycle", x: 56, y: 40, ST: 9, ET: 10, imgURL: "cycle.jpg", redURL: CycleItem, price: 34000 },
                { id: 1, name: "Blazer", x: 40, y: 47, ST: 11, ET: 13, imgURL: "Blazer.jpg", redURL: blazerItem, price: 5000 },
				{ id: 7, name: "Car", x: 62, y: 11, ST: 11, ET: 13, imgURL: "car.jpg", redURL: carItem, price: 1000000 },
			    { id: 8, name: "Glass", x: 24, y: 67, ST: 11, ET: 15, imgURL: "glass.jpg", redURL: glassItem, price: 1200 },
				 { id: 9, name: "Table", x: 70, y: 79, ST: 14, ET: 15, imgURL: "table.jpg", redURL: tableItem, price: 23000 },
				 { id: 10, name: "Chair", x: 71, y: 64, ST: 14, ET: 15, imgURL: "chair.jpg", redURL: chairItem, price: 2500 },
				  { id: 18, name: "Shirt", x: 50, y: 50, ST: 14, ET: 15, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 19, name: "Tiles", x: 81, y: 34, ST: 14, ET: 15, imgURL: "Tiles.jpg", redURL: tileItem, price: 250 },
				 { id: 11, name: "Table", x: 66, y: 65, ST: 19, ET: 20, imgURL: "dinning.jpg", redURL: DiningItem, price: 1001 },
				 //{ id: 12, name: "Chair", x: 69, y: 10, ST: 19, ET: 20, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 20, name: "Spectales", x: 30, y: 31, ST: 19, ET: 20, imgURL: "eyeglass.jpg", redURL: spectItem, price: 1100 },
				 { id: 13, name: "Cup", x: 53, y: 71, ST: 19, ET: 20, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
				 { id: 13, name: "Cup", x: 83, y: 52, ST: 21, ET: 24, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
				 { id: 17, name: "Shirt", x: 68, y: 46, ST: 21, ET: 24, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 //{ id: 12, name: "Chair", x: 69, y: 20, ST: 21, ET: 24, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 27, name: "Men Dress", x: 52, y: 76, ST: 25, ET: 26, imgURL: "menstraditional.jpg", redURL: mentradItem, price: 11000 },
				 { id: 28, name: "Mens Stole", x: 35, y: 33, ST: 25, ET: 26, imgURL: "mensstole.jpg", redURL: menStoleItem, price: 1600 },
				 { id: 29, name: "Pooja Items", x: 85, y: 45, ST: 29, ET: 30, imgURL: "poojaitems.jpg", redURL: poojaItems, price: 11000 },
				 { id: 22, name: "Wall Decor", x: 45, y: 80, ST: 35, ET: 37, imgURL: "Wall-Decor.jpg", redURL: wallDocrItem, price: 1200 },
				 { id: 23, name: "Dress", x: 49, y: 65, ST: 35, ET: 37, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 2400 },
				 { id: 4, x: 59, y: 11, name: "Dinning", ST: 35, ET: 37, imgURL: "dinning2.jpg", redURL: DiningItem, price: 19000 },
				 { id: 14, name: "Cup", x: 74, y: 32, ST: 35, ET: 37, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
			     { id: 2, x: 20, y: 34, name: "Cap", ST: 39, ET: 40, imgURL: "cap.jpg", redURL: capItem, price: 1003 },
			     { id: 21, name: "Shirt", x: 52, y: 32, ST: 39, ET: 40, imgURL: "golf-shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 15, name: "Shirt", x: 48, y: 29, ST: 41, ET: 42, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 41, ET: 42, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem2, price: 2400 },
				 { id: 26, name: "Dress", x: 53, y: 63, ST: 41, ET: 42, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem3, price: 2400 },
				 { id: 15, name: "Shirt", x: 58, y: 49, ST: 43, ET: 43, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 43, ET: 43, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem2, price: 2400 },
                 //{ id: 23, name: "Ladies Dress", x: 19, y: 45, ST: 49, ET: 65, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 3000 },
				 { id: 24, name: "Shirt", x: 54, y: 33, ST: 35, ET: 37, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 40, name: "Ring", x: 44, y: 34, ST: 45, ET: 47, imgURL: "ladiesearring.jpg", redURL: earringItem, price: 12000 },
				 { id: 30, name: "Dress", x: 70, y: 50, ST: 45, ET: 47, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem3, price: 2400 },
				  { id: 24, name: "Shirt", x: 74, y: 43, ST: 48, ET: 49, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				   { id: 24, name: "Shirt", x: 74, y: 43, ST: 54, ET: 44, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 31, name: "Dress", x: 64, y: 71, ST: 54, ET: 55, imgURL: "ladiesdress4.jpg", redURL: ladiesDressItem2, price: 2400 }
    ];

    var getAvailableItems = function () {

        var curTime = Math.floor(document.getElementById('MyAdminVideo1').currentTime);
        var filteredItems = items;
        filteredItems = _.filter(filteredItems, function (item) {
            return (item.ST <= curTime && item.ET >= curTime);
        });
        return filteredItems;
    }
    $scope.ShowItemsAvail = function (item) {
        if ($scope.playorpause == "play") {
            video.pause();
            $scope.playorpause = "play";
            // Update the button text to 'Play'
            //  playButton.innerHTML = "Play";
            $scope.availItems = getAvailableItems();
            $scope.isVisible = true;
            $scope.opacityinorout = "in";
            $scope.$apply();
        }
    }

    $scope.availItems = items;
    var video = document.getElementById("MyAdminVideo1");
    video.play();
    $scope.playorpause = "pause";
    $scope.muteorunmute = "speaker-on";
    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seektime = document.getElementById("seek-time");
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    document.onkeypress = function (e) {
        if ((e || window.event).keyCode === 32) {
            handlePlayorPause();
        }
    };

    playButton.addEventListener("click", function () {
        handlePlayorPause();
    });
    function handlePlayorPause() {
        if (video.paused == true) {
            // Play the video
            video.play();
            $scope.playorpause = "pause";

        } else {
            // Pause the video
            video.pause();
            $scope.playorpause = "play";
           // $scope.ShowItemsAvail();
        }
        $scope.opacityinorout = "out";
        $scope.$apply();
    }

    document.getElementById("MyAdminVideo1").onplaying = function () {
        $scope.isVisible = false;
        $scope.isItemSelected = false;
        $scope.$apply();
    };
   
    // Event listener for the mute button
    muteButton.addEventListener("click", function () {
        if (video.muted == false) {
            // Mute the video
            video.muted = true;
            $scope.muteorunmute = "mute";
        } else {
            // Unmute the video
            video.muted = false;
            $scope.muteorunmute = "speaker-on";
        }

        $scope.$apply();
    });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function () {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;

    });


    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function () {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;

        // Update the slider value
        seekBar.value = value;
       
        handlePlusForItems();
    });

    function handlePlusForItems() {
        var vidCurTime = video.currentTime;
        var vidDuration = video.duration;

        var videoinSec = Math.round(vidCurTime);
        $scope.isVisible = true;
        $scope.availItems = getAvailableItems();
        $scope.$apply();

    }

    $scope.openSelectedItem = function (item) {

        $scope.isItemSelected = true;
        $scope.selectedItem = item;


    }

}]);