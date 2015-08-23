'use strict';
angular.module('myApp.view1', ['ui.router'])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', function ($state, $scope, dataServices, $http, $window, _) {
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
	//var shirtItem = "http://www.amazon.com/Russell-Athletic-Basic-T-Shirt-XXX-Large/dp/B00076ZRC8/ref=sr_1_1?ie=UTF8&qid=1439295413&sr=8-1&keywords=t+shirt";
	var mentradItem = "http://shopping.indiatimes.com/fashion/ethnic-wear/bodyline-cream-men-kurta-pyjama-rk4028/43969/p_B2697112";
	var spectItem = "http://www.lenskart.com/vincent-chase-vc-0315-gunmetal-grey-black-doy2-eyeglasses.html";
	var wallDocrItem = "http://www.snapdeal.com/product/aquire-pvc-wall-stickers/638522664252";
	var ladiesDressItem1 = "http://www.stalkbuylove.com/little-black-dress-16.html?gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vcUjYJOgbK6VSeIMogd4WsdV-WjAfaI278oFn5F_MdMaAn4z8P8HAQ";
	var menStoleItem = "http://www.snapdeal.com/product/craftshub-exclusive-orange-colour-stripes/785291024";
	var tileItem = "http://www.pepperfry.com/homefurry-beige-glossy-tiles-bath-mat-1192276.html?gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vUqv9qnXnsjWmqdxwz8O6n62cAjUHY3UuNoTOp1NrBwaAuIW8P8HAQ";
	var poojaItems = "http://www.grtjewels.com/products/jewellery/collections/pooja-collections/kothu-kinnam";
	var goldRingItem = "http://www.bluestone.com/rings/the-heroic-soldier-ring~2793.html?land=true&gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vRDJB3zuji3PcZ_PMCx93Heb6SK-o8-1-_mn9vGph3oaAr6X8P8HAQ&dclid=CPvVpue7pccCFUGFaAod5_UHLw";
	var watchItem = "http://www.amazon.in/Timex-Classic-Analog-Gold-Watch/dp/B00CL52VNG?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=764cda5a-6597-47db-9066-f1f24e9b5406&kpid=B00CL52VNG";
	var chainItem = "http://www.snapdeal.com/product/magic-stones-18-carat-gold/675042370636?utm_source=earth_feed&utm_campaign=6_49&utm_medium=101343078&vendorCode=S5ea0b";
	var phoneUrl = "http://www.askmebazaar.com/product.php?gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vcqd9kCRAeiXguxQk8O-Dwtqgq5vWuH7kuRo2Ef4FigaAl2e8P8HAQ&app_data=cHJvZHVjdF9pZD00OTUwMCZzdG9yZV9mcm9udF9pZD0yMTEmZGVhbHNndXJ1PTE=&ef_id=Va34TgAAATwvX8Te:20150813065426:s";
	var sofaItem = "http://www.pepperfry.com/alia-modular-sofa-sectional-2-corner-1-1-seater-in-black-colour-by-furny-1266366.html?gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vWhWI0z1DJUoHdqta2jwDgAyQ7CT57_tWcL39HtnMGIaAsSC8P8HAQ";
	var bhudhaItem = "http://www.at-home.co.in/decor/olive-buddha-face-showpiece-home-nilkamal/p-7273534-52917894305-cat.html?gclid=Cj0KEQjw3auuBRDj1LnQyLjy-4sBEiQAKPU_vd-pQ-1BZZyUhTHDjEwJeV8Np0zIftUaRrbl0l3yjvgaAkrE8P8HAQ";
	var sareeItem = "http://www.jabong.com/Ambica-Green-Printed-Saree-1519170.html?pos=65";
	var earringItem = "http://www.snapdeal.com/product/shinningdiva-aashiqui-2-earrings-in/516664782?utm_source=earth_feed&utm_campaign=6_341&utm_medium=102426941&vendorCode=S82cc7";

	var items = [
				{ id: 6, name: "cycle", x: 56, y: 40, ST: 9, ET: 10, imgURL: "cycle.jpg", redURL: CycleItem, price: 29000 },
                { id: 1,x:40, y:47,name: "Blazer", ST: 11, ET: 13, imgURL: "Blazer.jpg", redURL: blazerItem, price: 10000 },
				{ id: 7, name: "Car", x: 62, y: 11, ST: 11, ET: 13, imgURL: "car.jpg", redURL: carItem, price: 10300 },
			    { id: 8, name: "Glass", x: 24, y: 67, ST: 11, ET: 15, imgURL: "glass.jpg", redURL: glassItem, price: 12000 },
				 { id: 9, name: "Table", x: 70, y: 79, ST: 14, ET: 15, imgURL: "table.jpg", redURL: tableItem, price: 3000 },
				 { id: 10, name: "Chair", x: 71, y: 64, ST: 14, ET: 15, imgURL: "chair.jpg", redURL: chairItem, price: 19000 },
				  { id: 18, name: "Shirt", x: 50, y: 50, ST: 14, ET: 15, imgURL: "shirt.jpg", redURL: shirtItem, price: 1300 },
				 { id: 19, name: "Tiles", x: 81, y: 34, ST: 14, ET: 15, imgURL: "Tiles.jpg", redURL: tileItem, price: 1110 },
				 { id: 11, name: "Table", x: 66, y: 65, ST: 19, ET: 20, imgURL: "dinning.jpg", redURL: tableItem, price: 1001 },
				 //{ id: 12, name: "Chair", x: 69, y: 10, ST: 19, ET: 20, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 20, name: "Spectales", x: 30, y: 31, ST: 19, ET: 20, imgURL: "eyeglass.jpg", redURL: spectItem, price: 1300 },
				 { id: 13, name: "Cup", x: 53, y: 71, ST: 19, ET: 20, imgURL: "cup.jpg", redURL: cupItem, price: 1900 },
				 { id: 13, name: "Cup", x: 83, y: 52, ST: 21, ET: 24, imgURL: "cup.jpg", redURL: cupItem, price: 1200 },
				 { id: 17, name: "Shirt", x: 68, y: 46, ST: 21, ET: 24, imgURL: "shirt.jpg", redURL: shirtItem, price: 1900 },
				 //{ id: 12, name: "Chair", x: 69, y: 20, ST: 21, ET: 24, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 27, name: "Men Dress", x: 52, y: 76, ST: 25, ET: 26, imgURL: "menstraditional.jpg", redURL: mentradItem, price: 2100 },
				 { id: 28, name: "Mens Stole", x: 35, y: 33, ST: 25, ET: 26, imgURL: "mensstole.jpg", redURL: menStoleItem, price: 200 },
				 { id: 29, name: "Pooja Items", x: 85, y: 45, ST: 29, ET: 30, imgURL: "poojaitems.jpg", redURL: poojaItems, price: 13000 },
				 { id: 22, name: "Wall Decor", x: 45, y: 80, ST: 35, ET: 37, imgURL: "Wall-Decor.jpg", redURL: wallDocrItem, price: 14000 },
				 { id: 23, name: "Dress", x: 49, y: 65, ST: 35, ET: 37, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 3000 },
				 { id: 4, x: 59, y: 11, name: "Dinning", ST: 35, ET: 37, imgURL: "dinning2.jpg", redURL: DiningItem, price: 19000 },
				 { id: 14, name: "Cup", x: 74, y: 32, ST: 35, ET: 37, imgURL: "cup.jpg", redURL: cupItem, price: 1000 },
			     { id: 2, x: 20, y: 34, name: "Cap", ST: 39, ET: 40, imgURL: "cap.jpg", redURL: capItem, price: 1000 },
			     { id: 21, name: "Shirt", x: 52, y: 32, ST: 39, ET: 40, imgURL: "golf-shirt.jpg", redURL: shirtItem, price: 900 },
				 { id: 15, name: "Shirt", x: 48, y: 29, ST: 41, ET: 42, imgURL: "shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 41, ET: 42, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem1, price: 1090 },
				 { id: 26, name: "Dress", x: 53, y: 63, ST: 41, ET: 42, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem1, price: 1200 },
				 { id: 15, name: "Shirt", x: 58, y: 49, ST: 43, ET: 43, imgURL: "shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 43, ET: 43, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem1, price: 1090 },
                 //{ id: 23, name: "Ladies Dress", x: 19, y: 45, ST: 49, ET: 65, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 3000 },
				 { id: 24, name: "Shirt", x: 54, y: 33, ST: 35, ET: 37, imgURL: "shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 40, name: "Ring", x: 44, y: 34, ST: 45, ET: 47, imgURL: "ladiesearring.jpg", redURL: earringItem, price: 19000 },
				 { id: 30, name: "Dress", x: 70, y: 50, ST: 45, ET: 47, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem1, price: 1900 },
				  { id: 24, name: "Shirt", x: 74, y: 43, ST: 48, ET: 49, imgURL: "shirt.jpg", redURL: shirtItem, price: 1000 },
				   { id: 24, name: "Shirt", x: 74, y: 43, ST: 54, ET: 44, imgURL: "shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 31, name: "Dress", x: 64, y: 71, ST: 54, ET: 55, imgURL: "ladiesdress4.jpg", redURL: ladiesDressItem1, price: 1700 },



				 { id: 32, name: "Ring", x: 37, y: 66, ST: 61, ET: 62, imgURL: "goldring.jpg", redURL: menStoleItem, price: 10090 },
				 { id: 33, name: "Watch", x: 73, y: 75, ST: 61, ET: 62, imgURL: "watch.jpg", redURL: menStoleItem, price: 5000 },
			     { id: 34, name: "Chain", x: 74, y: 43, ST: 61, ET: 62, imgURL: "goldchain.jpg", redURL: menStoleItem, price: 20000 },
				 { id: 35, name: "Phone", x: 50, y: 56, ST: 61, ET: 62, imgURL: "phone.jpg", redURL: menStoleItem, price: 50000 },


				  { id: 16, name: "Shirt", x: 67, y: 67, ST: 77, ET: 82, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 36, name: "Sofa", x: 67, y: 33, ST: 77, ET: 82, imgURL: "sofa.jpg", redURL: sofaItem, price: 32000 },
			     { id: 37, name: "Bhudha", x: 55, y: 30, ST: 77, ET: 82, imgURL: "budha.jpg", redURL: bhudhaItem, price: 4500 },
				   { id: 3, x: 60, y: 63, name: "car", ST: 86, ET: 86, imgURL: "car.jpg", redURL: carItem, price: 100000 },


				{ id: 38, name: "Saree", x: 50, y: 50, ST: 109, ET: 115, imgURL: "saree.jpg", redURL: sareeItem, price: 4500 },
				 { id: 39, name: "Shirt", x: 50, y: 40, ST: 109, ET: 115, imgURL: "shirt.jpg", redURL: shirtItem, price: 900 },
				
				 { id: 41, name: "Shirt", x: 51, y: 49,  ST: 94, ET: 96, imgURL: "shirt.jpg", redURL: shirtItem, price: 1900 },


				{ id: 42, name: "Shirt", x: 41, y: 44, ST: 117, ET: 118, imgURL: "shirt.jpg", redURL: shirtItem, price: 900 },
               
                { id: 5, x: 55, y: 44, name: "cycle", ST: 117, ET: 118, imgURL: "cycle.jpg", redURL: CycleItem, price: 22000 },

				{ id: 42, name: "Shirt", x: 51, y: 54, ST: 119, ET: 119, imgURL: "shirt.jpg", redURL: shirtItem, price: 900 },

              

					

	];

	$scope.isVisible = false;



	var getAvailableItems = function () {

		var curTime = Math.floor(document.getElementById('MyVideo1').currentTime);
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
	        $scope.ShowItemsAvail();
	    }
	    $scope.opacityinorout = "out";
	    $scope.$apply();
	}

	document.getElementById("MyVideo1").onplaying = function () {
	    $scope.isVisible = false;
	    $scope.isItemSelected = false;
		$scope.$apply();
	};
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
	    //seektime.textContent = Math.floor(video.currentTime);


	    //handle plus position

		//handlePlusForItems();

	});

	function handlePlusForItems() {
	    var vidCurTime = video.currentTime;
	    var vidDuration = video.duration;

	    var videoinSec = Math.round(vidCurTime);
	    $scope.isVisible = true;
	  $scope.availItems= getAvailableItems();
	  $scope.$apply();

	}
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

	$scope.openSelectedItem = function (item) {

	    $scope.isItemSelected = true;
	    $scope.selectedItem = item;


	}

	$scope.closeItemSelected = function () {
	    $scope.isItemSelected = false;
	}

}]);