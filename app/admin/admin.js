'use strict';
angular.module('myApp.admin', ['ui.router'])

.controller('adminCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', '$timeout', '$interval', function ($state, $scope, dataServices, $http, $window, _, $timeout, $interval) {
  
    //{ id: 6, name: "cycle", x: 56, y: 40, ST: 9, ET: 10, imgURL: "cycle.jpg", redURL: CycleItem, price: 29000 },


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

            // Update the button text
            // muteButton.innerHTML = "Unmute";
            $scope.muteorunmute = "mute";
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            //muteButton.innerHTML = "Mute";
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
       

    });


}]);