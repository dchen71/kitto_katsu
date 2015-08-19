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
}
google.maps.event.addDomListener(window, 'load', initialize);





