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

  const tok2_cont =  "<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
					  "<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
					  "<p>Hours</p>" +
					  "<p class='store-content'>M-F: 10AM - 9PM</p>" +
					  "<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
					  "<p>Phone Number</p>" +
					  "<p class='store-content'>03-6895-8735</p>";

  const nag1_cont =  "<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
					  "<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
					  "<p>Hours</p>" +
					  "<p class='store-content'>M-F: 10AM - 9PM</p>" +
					  "<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
					  "<p>Phone Number</p>" +
					  "<p class='store-content'>03-6895-8735</p>";

  const kyo1_cont =  "<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
					  "<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
					  "<p>Hours</p>" +
					  "<p class='store-content'>M-F: 10AM - 9PM</p>" +
					  "<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
					  "<p>Phone Number</p>" +
					  "<p class='store-content'>03-6895-8735</p>";

  const sap1_cont =  "<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
					  "<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
					  "<p>Hours</p>" +
					  "<p class='store-content'>M-F: 10AM - 9PM</p>" +
					  "<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
					  "<p>Phone Number</p>" +
					  "<p class='store-content'>03-6895-8735</p>";

  const osa1_cont =  "<p class='store-content'>大丸東京店 地下1階 ほっぺタウン</p>" +
					  "<p class='store-content'>東京都千代田区丸の内1-9-1</p>" +
					  "<p>Hours</p>" +
					  "<p class='store-content'>M-F: 10AM - 9PM</p>" +
					  "<p class='store-content'>Sa-Sun: 10AM-8PM</p>" +
					  "<p>Phone Number</p>" +
					  "<p class='store-content'>03-6895-8735</p>";

  var infowindow = new google.maps.InfoWindow({
  content:tok1_cont});

infowindow.open(map,marker_nagoya);
}
google.maps.event.addDomListener(window, 'load', initialize);





