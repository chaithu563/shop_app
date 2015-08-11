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

   
  



    //search handle

    $scope.videos = [
           { name: 'Attharinti Daredi', code: '1' },
           { name: 'Aagadu', code: '2' },
           { name: 'Athadu', code: '3' },
           { name: 'Avakay Biryani', code: '4' },
   
           { name: 'Bhartiyudu', code: '5' },
           { name: 'Bava', code: '6' },
           { name: 'Bhuzzigadu', code: '7' },
          
           { name: 'Chinnadanee', code: '8' },
           { name: 'Chukkalo Chnadrudu', code: '9' },
          
           { name: 'Dadi', code: '10' },
           { name: 'Don', code: '11' },
           { name: 'Doosukosta', code: '12' },
          
          
           { name: 'Gamyam', code: '13' },
           { name: 'Godavari', code: '15' },

          
         
         
           { name: 'Jilla', code: '16' },
           { name: 'Gabbar Sing', code: '18' },
          
           { name: 'Munna', code: '19' },
          
           { name: '3Idiots', code: '20' },
           { name: 'Businessman', code: '21' },
           
          
           { name: 'Sreemanthudu', code: '22' },
           { name: 'Nenokkadee', code: '23' },
          
           { name: 'Bahubali', code: '24' }
           
    
    ];
    $scope.selectedVideo = '22';

    //video control
        // Video
        var video = document.getElementById("MyVideo1");

        // Buttons
        var playButton = document.getElementById("play-pause");
        var muteButton = document.getElementById("mute");
        var fullScreenButton = document.getElementById("full-screen");

        // Sliders
        var seekBar = document.getElementById("seek-bar");
        var volumeBar = document.getElementById("volume-bar");


        // Event listener for the play/pause button
        playButton.addEventListener("click", function () {
            if (video.paused == true) {
                // Play the video
                video.play();

                // Update the button text to 'Pause'
                playButton.innerHTML = "Pause";
            } else {
                // Pause the video
                video.pause();

                // Update the button text to 'Play'
                playButton.innerHTML = "Play";
            }
        });

        document.getElementById("MyVideo1").onplaying = function () {
            $scope.isVisible = false;
            $scope.$apply();
        };
        $scope.ShowItemsAvail = function (item) {
            video.pause();
            // Update the button text to 'Play'
            playButton.innerHTML = "Play";
            $scope.availItems = getAvailableItems();
            $scope.isVisible = true;
        }


        // Event listener for the mute button
        muteButton.addEventListener("click", function () {
            if (video.muted == false) {
                // Mute the video
                video.muted = true;

                // Update the button text
                muteButton.innerHTML = "Unmute";
            } else {
                // Unmute the video
                video.muted = false;

                // Update the button text
                muteButton.innerHTML = "Mute";
            }
        });


        // Event listener for the full-screen button
        fullScreenButton.addEventListener("click", function () {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            }
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

        // Pause the video when the seek handle is being dragged
        seekBar.addEventListener("mousedown", function () {
            video.pause();
        });

        // Play the video when the seek handle is dropped
        seekBar.addEventListener("mouseup", function () {
            video.play();
        });

        // Event listener for the volume bar
        volumeBar.addEventListener("change", function () {
            // Update the video volume
            video.volume = volumeBar.value;
        });

}]);