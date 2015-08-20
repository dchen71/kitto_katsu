/*
Google Maps
 */

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(38,139),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  /* Lat/Lng of the stores */
  const tokyo1 = new google.maps.LatLng(35.681788,139.766761);
  const tokyo2 = new google.maps.LatLng(35.727668,139.711482);
  const kyoto = new google.maps.LatLng(35.004293,135.762021);
  const nagoya = new google.maps.LatLng(35.164482,136.907916);
  const osaka = new google.maps.LatLng(34.705517,135.498312);
  const sapporo = new google.maps.LatLng(43.067693,141.349444);
  

  /* Setups the markers */
  var marker_tokyo1 = new google.maps.Marker({
    position:tokyo1,
    });
  var marker_tokyo2 = new google.maps.Marker({
    position:tokyo2,
    });
  var marker_kyoto = new google.maps.Marker({
    position:kyoto,
    });
  var marker_nagoya = new google.maps.Marker({
    position:nagoya,
    });
  var marker_osaka = new google.maps.Marker({
    position:osaka,
    });
  var marker_sapporo = new google.maps.Marker({
    position:sapporo,
    });
  
  marker_tokyo1.setMap(map);
  marker_tokyo2.setMap(map);
  marker_sapporo.setMap(map);
  marker_osaka.setMap(map);
  marker_kyoto.setMap(map);
  marker_nagoya.setMap(map);

  const tok1_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" + 
						"<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
						"<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>M-F: 10AM - 9PM</p>" +
						"<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
						"<p class='store-title'>Phone Number</p>" +
						"<p class='store-content'>03-6895-8735</p>" +
					 "</div>";

  const tok2_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" +
						"<p class='store-content'>西武池袋本店 地下1階</p>" +
						"<p class='store-content'>東京都豊島区南池袋1-28-1</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>M-F: 10AM - 9PM</p>" +
						"<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
						"<p class='store-title'>Phone Number</p> " +
						"<p class='store-content'>03-5949-2026</p>" +
					"</div>";

  const nag1_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" +
						"<p class='store-content'>松坂屋名古屋店 本館地下1階 ごちそうパラダイス</p>" +
						"<p class='store-content'>名古屋市中区栄3-16-1</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>Everyday: 10AM - 8PM</p>" +
						"<p class='store-title'>Phone Number</p> " +
						"<p class='store-content'>052-261-5519</p>" +
					"</div>";

  const kyo1_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" +
						"<p class='store-content'>大丸京都店 地下1階 ごちそうパラダイス</p>" +
						"<p class='store-content'>京都市下京区四条通高倉西入立売西町79番地</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>Everyday: 10AM-8PM</p>" +
						"<p class='store-title'>Phone Number</p>" +
						"<p class='store-content'>075-211-8111</p>" +
					"</div>";

  const sap1_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" +
						"<p class='store-content'>大丸札幌店B1 ほっぺタウン内</p>" +
						"<p class='store-content'>札幌市中央区北5条西4丁目7番地</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>Everyday: 10AM-8PM</p>" +
						"<p class='store-title'>Phone Number</p>" +
						"<p class='store-content'>011-828-1111</p>" +
					"</div>";

  const osa1_cont =  "<div class='store'>" +
						"<p class='store-title'>Address</p>" +
						"<p class='store-content'>大丸梅田店　地下1階 ごちそうパラダイス</p>" +
						"<p class='store-content'>大阪市北区梅田3-1-1</p>" +
						"<p class='store-title'>Hours</p> " +
						"<p class='store-content'>M-F: 10AM - 8:30PM</p>" +
						"<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
						"<p class='store-title'>Phone Number</p>" +
						"<p class='store-content'>06-6343-1231</p>" +
					"</div>";
  
  var infowindow = new google.maps.InfoWindow();
  
  marker_nagoya.addListener('click', function(){
	  infowindow.setContent(nag1_cont);
	  infowindow.open(map,marker_nagoya);
  });

  marker_tokyo1.addListener('click', function(){
	  infowindow.setContent(tok1_cont);
	  infowindow.open(map,marker_tokyo1);
  });

  marker_tokyo2.addListener('click', function(){
	  infowindow.setContent(tok2_cont);
	  infowindow.open(map,marker_tokyo2);
  });

  marker_kyoto.addListener('click', function(){
	  infowindow.setContent(kyo1_cont);
	  infowindow.open(map,marker_kyoto);
  });

  marker_sapporo.addListener('click', function(){
	  infowindow.setContent(sap1_cont);
	  infowindow.open(map,marker_sapporo);
  });

  marker_osaka.addListener('click', function(){
	  infowindow.setContent(osa1_cont);
	  infowindow.open(map,marker_osaka);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);





