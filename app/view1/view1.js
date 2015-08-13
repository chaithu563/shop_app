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
	var shirtItem = "http://www.amazon.com/Russell-Athletic-Basic-T-Shirt-XXX-Large/dp/B00076ZRC8/ref=sr_1_1?ie=UTF8&qid=1439295413&sr=8-1&keywords=t+shirt";
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

	var items = [
                { id: 1, name: "Blazer", ST: 11, ET: 13, imgURL: "http://www.saymoontailors.com/uploads/21.jpg", redURL: blazerItem, price: 10000 },
                { id: 2, name: "Cap", ST: 39, ET: 40, imgURL: "http://www.volkl.com/uploads/tx_voelkldata/fashion/VolklLogoCap_BLK_L_01.png", redURL: capItem, price: 1000 },
                { id: 3, name: "car", ST: 86, ET: 87, imgURL: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/bmw-cars-picture.jpg", redURL: carItem, price: 1000000 },
                { id: 4, name: "Dinning", ST: 35, ET: 40, imgURL: "http://i1.pepperfry.com/media/catalog/product/t/w/800x880/two-seater-dining-set-in-white-colour-by-ventura-two-seater-dining-set-in-white-colour-by-ventura-mpm4hn.jpg", redURL: DiningItem, price: 19000 },
                { id: 5, name: "cycle", ST: 118, ET: 145, imgURL: "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/18320/c/cycle_54a3b8fe76041._hero-electric-avior-amx-electric-cycle.jpg", redURL: CycleItem, price: 20000 },
				{ id: 6, name: "cycle", ST: 7, ET: 10, imgURL: "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/18320/c/cycle_54a3b8fe76041._hero-electric-avior-amx-electric-cycle.jpg", redURL: CycleItem, price: 20000 },
				{ id: 7, name: "Car", ST: 11, ET: 13, imgURL: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/bmw-cars-picture.jpg", redURL: carItem, price: 1000000 },
			    { id: 8, name: "Glass", ST: 11, ET: 15, imgURL: "http://mat2.materialicious.com/images/glass-houses-showcase-a-line-of-glass-furniture-o.jpg", redURL: glassItem, price: 10000 },
				 { id: 9, name: "Table", ST: 14, ET: 15, imgURL: "http://i1.pepperfry.com/media/catalog/product/n/i/800x880/nilkamal-executive-acacia-computer-table-nilkamal-executive-acacia-computer-table-wrgfqj.jpg", redURL: tableItem, price: 3000 },
				 { id: 10, name: "Chair", ST: 14, ET: 15, imgURL: "http://johnlewis.scene7.com/is/image/JohnLewis/233166328alt1?$prod_exlrg$", redURL: chairItem, price: 19000 },
				 { id: 11, name: "Table", ST: 18, ET: 24, imgURL: "http://i1.pepperfry.com/media/catalog/product/t/w/800x880/two-seater-dining-set-in-white-colour-by-ventura-two-seater-dining-set-in-white-colour-by-ventura-mpm4hn.jpg", redURL: tableItem, price: 1000 },
				 { id: 12, name: "Chair", ST: 18, ET: 24, imgURL: "http://johnlewis.scene7.com/is/image/JohnLewis/233166328alt1?$prod_exlrg$", redURL: chairItem, price: 1000 },
				 { id: 13, name: "Cup", ST: 18, ET: 24, imgURL: "http://images.wisegeek.com/cup-of-white-sauce.jpg", redURL: cupItem, price: 1000 },
				 { id: 14, name: "Cup", ST: 35, ET: 40, imgURL: "http://images.wisegeek.com/cup-of-white-sauce.jpg", redURL: cupItem, price: 1000 },
				 { id: 15, name: "Shirt", ST: 42, ET: 56, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 16, name: "Shirt", ST: 73, ET: 82, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 17, name: "Shirt", ST: 18, ET: 24, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 1200 },
				 { id: 18, name: "Shirt", ST: 14, ET: 15, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 1300 },
				 { id: 19, name: "Tiles", ST: 14, ET: 15, imgURL: "http://hardwoodfloorscharlotte.com/wp-content/uploads/2014/02/plymouth-brown.jpg", redURL: tileItem, price: 1110 },
                 { id: 20, name: "Spectales", ST: 18, ET: 21, imgURL: "http://www.firmoo.com/frame-images/1364/middle-unisex-plastic-eyeglasses-6485.png", redURL: spectItem, price: 1300 },
                 { id: 21, name: "Shirt", ST: 39, ET: 41, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 900 },
                 { id: 22, name: "Wall Decoration", ST: 35, ET: 37, imgURL: "http://bestinspired.com/wp-content/uploads/2015/04/Wall-Decor.jpg", redURL: wallDocrItem, price: 140000 },
				 { id: 23, name: "Ladies Dress", ST: 35, ET: 37, imgURL: "http://i01.i.aliimg.com/wsphoto/v6/543883757_1/Spring-2014-New-Brand-Dress-Little-Black-Dress-Fashion-Chiffon-Mini-Women-s-Ladies-Party-Sexy.jpg", redURL: ladiesDressItem1, price: 3000 },
				 { id: 24, name: "Shirt", ST: 35, ET: 37, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 1000 },
				 { id: 25, name: "ladies Dress", ST: 42, ET: 44, imgURL: "http://www.jabong.com/blog/wp-content/uploads/2015/07/holding8.jpg", redURL: ladiesDressItem1, price: 1090 },
				 { id: 26, name: "ladies Dress", ST: 42, ET: 44, imgURL: "http://clothing9.in/wp-content/uploads/2015/04/Punjabi-Salwar-Kameez-Dresses-Design-2015-16-For-Modern-Girls-3.jpg", redURL: ladiesDressItem1, price: 1200 },
				 { id: 27, name: "Mens Traditional", ST: 25, ET: 30, imgURL: "https://s-media-cache-ak0.pinimg.com/736x/b2/e4/cc/b2e4cc4ee39e80656ed74c151698c6b6.jpg", redURL: mentradItem, price: 2100 },
				 { id: 28, name: "Mens Stole", ST: 25, ET: 30, imgURL: "http://www.inonit.in/images/item/6/e/e/kadi-print-woven-stole-red.jpg", redURL: menStoleItem, price: 200 },
				 { id: 29, name: "Pooja Items", ST: 27, ET: 30, imgURL: "http://pimg.tradeindia.com/00457986/b/1/Silver-Pooja-Items.jpg", redURL: poojaItems, price: 130000 },
				 { id: 30, name: "ladies Dress", ST: 45, ET: 51, imgURL: "http://clothing9.in/wp-content/uploads/2015/04/Punjabi-Salwar-Kameez-Dresses-Design-2015-16-For-Modern-Girls-3.jpg", redURL: ladiesDressItem1, price: 1900 },
				 { id: 31, name: "ladies Dress", ST: 54, ET: 55, imgURL: "http://cdn.shopify.com/s/files/1/0611/8081/products/6_2015_DESIGN_LADIES_WEAR_SALWAR_KAMEEZ_DRESS_MATERIAL_SHOP_ONLINE_PINK_A.jpg?v=1422628079", redURL: ladiesDressItem1, price: 1700 },
				 { id: 32, name: "Gold Ring", ST: 61, ET: 63, imgURL: "https://zaveribazaarjewelers.com/thumbL/images/5_Indian_Gold_Rings_(Mens)_58180.jpg", redURL: menStoleItem, price: 10090 },
				 { id: 33, name: "Watch", ST: 61, ET: 63, imgURL: "http://i01.i.aliimg.com/photo/v0/150660583/Black_Dial_Yellow_Gold_Plated_Luxurman_Diamond.jpg", redURL: menStoleItem, price: 5000 },
			     { id: 34, name: "Gold Chain", ST: 61, ET: 63, imgURL: "http://www.pics4world.com/vb/imgcache/2/21663showing.jpg", redURL: menStoleItem, price: 20000 },
				 { id: 35, name: "Phone", ST: 61, ET: 63, imgURL: "http://thesweetsetup.com/wp-content/uploads/2014/01/hurley-iphone_iphone5s_silver_portrait.jpg", redURL: menStoleItem, price: 50000 },
				 { id: 36, name: "Sofa", ST: 77, ET: 82, imgURL: "http://www.homelogy.net/furniture/wp-content/uploads/2015/06/red-sofa-4.jpg", redURL: sofaItem, price: 32000 },
			     { id: 37, name: "Bhudha", ST: 77, ET: 82, imgURL: "http://www.santosha.com/assets/images/teracotta_buddha.jpg", redURL: bhudhaItem, price: 4500 },
				 { id: 38, name: "Saree", ST: 109, ET: 115, imgURL: "https://www.expatads.com/adpics1/2013/8/online-saree-shopping-online-shopping-wedding-sarees-and-apparel-shopping-saree521f03a39961fb974620.jpg", redURL: sareeItem, price: 4500 },
				 { id: 39, name: "Shirt", ST: 109, ET: 115, imgURL: "http://www.crunchwear.com/wp-content/uploads/2013/08/Personal-Soundtrack-shirt.jpg", redURL: shirtItem, price: 900 },
					



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
	var seektime = document.getElementById("seek-time");
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
		$scope.opacityinorout = "out";
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
		$scope.opacityinorout = "in";
		$scope.$apply();
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