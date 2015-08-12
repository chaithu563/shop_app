'use strict';
angular.module('myApp.view1', ['ui.router'])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', '$http', '$window','_', function ($state, $scope, dataServices, $http, $window,_) {
	var blazerItem = "http://www.flipkart.com/protext-premium-solid-single-breasted-formal-men-s-blazer/p/itme5sh4tfxhf8hg?pid=BZRE5SH4C8PQMMWM&ref=L%3A-2203174991299721304&srno=p_31&query=blazer&otracker=from-search";
	var carItem = "http://www.zigwheels.com/newcars/Hyundai/Creta";
	var capItem = "http://www.flipkart.com/cravers-premium-solid-snapback-cap/p/itme5tpvrzmkgq6n?pid=CAPE5TPVUUCMADYY&ref=L%3A7670444542371712963&srno=p_2&query=cap&otracker=from-search";
	var DiningItem = "http://www.pepperfry.com/two-seater-dining-set-in-white-colour-by-ventura-1265359.html?type=sel";
	var CycleItem = "http://www.snapdeal.com/product/btwin-my-bike-7s-mountain/466642201#bcrumbLabelId:280";
	var glassItem = "http://www.snapdeal.com/product/krm-moonstone-straight-shelf-10x5/100199843#bcrumbSearch:glass";
	var tableItem = "http://www.snapdeal.com/product/study-table-with-3-drawers/884763667";
	var chairItem = "http://www.snapdeal.com/product/divano-modular-black-metal-office/1301325749";
	var cupItem = "http://www.amazon.com/Stainless-Steel-Sauce-Condiment-Cups/dp/B000K9WTN2";
	var shirtItem = "http://www.amazon.com/Russell-Athletic-Basic-T-Shirt-XXX-Large/dp/B00076ZRC8/ref=sr_1_1?ie=UTF8&qid=1439295413&sr=8-1&keywords=t+shirt";
	var items = [
                { id: 1, name: "Blazer", ST: 11, ET: 13, imgURL: "http://www.saymoontailors.com/uploads/21.jpg", redURL: blazerItem },
                { id: 2, name: "Cap", ST: 39, ET: 41, imgURL: "http://www.volkl.com/uploads/tx_voelkldata/fashion/VolklLogoCap_BLK_L_01.png", redURL: capItem },
                { id: 3, name: "car", ST: 86, ET: 87, imgURL: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/bmw-cars-picture.jpg", redURL: carItem },
                { id: 4, name: "Dinning", ST: 35, ET: 41, imgURL: "http://i1.pepperfry.com/media/catalog/product/t/w/800x880/two-seater-dining-set-in-white-colour-by-ventura-two-seater-dining-set-in-white-colour-by-ventura-mpm4hn.jpg", redURL: DiningItem },
                { id: 5, name: "cycle", ST: 118, ET: 145, imgURL: "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/18320/c/cycle_54a3b8fe76041._hero-electric-avior-amx-electric-cycle.jpg", redURL: CycleItem },
				{ id: 6, name: "cycle", ST: 7, ET: 10, imgURL: "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/18320/c/cycle_54a3b8fe76041._hero-electric-avior-amx-electric-cycle.jpg", redURL: CycleItem },
				{ id: 7, name: "Car", ST: 11, ET: 13, imgURL: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/bmw-cars-picture.jpg", redURL: carItem },
			    { id: 8, name: "Glass", ST: 11, ET: 15, imgURL: "http://mat2.materialicious.com/images/glass-houses-showcase-a-line-of-glass-furniture-o.jpg", redURL: glassItem },
				 { id: 9, name: "Table", ST: 14, ET: 15, imgURL: "http://i1.pepperfry.com/media/catalog/product/n/i/800x880/nilkamal-executive-acacia-computer-table-nilkamal-executive-acacia-computer-table-wrgfqj.jpg", redURL: tableItem },
				 { id: 10, name: "Chair", ST: 14, ET: 15, imgURL: "http://johnlewis.scene7.com/is/image/JohnLewis/233166328alt1?$prod_exlrg$", redURL: chairItem },
				 { id: 11, name: "Table", ST: 18, ET: 24, imgURL: "http://i1.pepperfry.com/media/catalog/product/n/i/800x880/nilkamal-executive-acacia-computer-table-nilkamal-executive-acacia-computer-table-wrgfqj.jpg", redURL: tableItem },
				 { id: 12, name: "Chair", ST: 18, ET: 24, imgURL: "http://johnlewis.scene7.com/is/image/JohnLewis/233166328alt1?$prod_exlrg$", redURL: chairItem },
				  { id: 13, name: "Cup", ST: 18, ET: 24, imgURL: "http://images.wisegeek.com/cup-of-white-sauce.jpg", redURL: cupItem },
				   { id: 14, name: "Cup", ST: 35, ET: 41, imgURL: "http://images.wisegeek.com/cup-of-white-sauce.jpg", redURL: cupItem },
				    { id: 15, name: "Shirt", ST: 42, ET: 56, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem },
					{ id: 16, name: "Shirt", ST: 73, ET: 82, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem }
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
        video.play();
        $scope.playorpause = "pause";
        $scope.muteorunmute = "speaker-on";
        // Buttons
        var playButton = document.getElementById("play-pause");
        var muteButton = document.getElementById("mute");
        var fullScreenButton = document.getElementById("full-screen");

    // Sliders
        var seektime=document.getElementById("seek-time");
        var seekBar = document.getElementById("seek-bar");
        var volumeBar = document.getElementById("volume-bar");


        // Event listener for the play/pause button
        playButton.addEventListener("click", function () {
            if (video.paused == true) {
                // Play the video
                video.play();
                $scope.playorpause = "pause";
                // Update the button text to 'Pause'
              //  playButton.innerHTML = "Pause";
            } else {
                // Pause the video
                video.pause();
                $scope.playorpause = "play";
                // Update the button text to 'Play'
               // playButton.innerHTML = "Play";
            }
            $scope.$apply();
        });

        document.getElementById("MyVideo1").onplaying = function () {
            $scope.isVisible = false;
            $scope.$apply();
        };
        $scope.ShowItemsAvail = function (item) {
            video.pause();
            $scope.playorpause = "play";
            // Update the button text to 'Play'
          //  playButton.innerHTML = "Play";
            $scope.availItems = getAvailableItems();
            $scope.isVisible = true;
        }


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
            seektime.textContent = Math.floor(video.currentTime);
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
        $scope.$apply();

}]);