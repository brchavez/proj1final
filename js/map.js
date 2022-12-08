function initMap() {
    var center = {lat: 41.858, lng: -87.629};
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 13, center: center});

    var school = new google.maps.Marker({position: {lat: 41.874, lng: -87.628}, map: map});
    var schooltext = new google.maps.InfoWindow({content:'<h1>SCHOOL!<h1/>'});
    school.addListener('click', function(){schooltext.open(map, school);});

    var grant = new google.maps.Marker({position: {lat:41.87,lng:-87.618}, map: map});
    var granttext = new google.maps.InfoWindow({content:'<h1>Grant park!<h1/>'});
    grant.addListener('click', function(){granttext.open(map, grant);});

    var beach = new google.maps.Marker({position: {lat:41.838, lng:-87.6065}, map:map});
    var beachtext = new google.maps.InfoWindow({content:'<h1>Beach!<h1/>'});
    beach.addListener('click', function(){beachtext.open(map, beach);});
}

window.initMap = initMap;