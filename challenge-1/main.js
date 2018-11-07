var pinsShown = true;

var map;
function initMap() {
    var montgomery = {lat: 32.377344, lng:-86.306442};
    var atlanta = {lat: 33.746950, lng: -84.379438};
    var jackson = {lat: 32.299140, lng:-90.182725};
    var tallahassee = {lat:30.601884, lng: -84.250809};
    var columbia = {lat: 34.052781, lng: -81.028264};
    var raleigh = {lat: 35.826715, lng: -78.582823};
    var nashville = {lat: 36.290020, lng: -86.722161};
    var batonrouge = {lat: 30.493128, lng: -91.169812};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33, lng: -83},
        zoom: 6
    });
    var marker = new google.maps.Marker({position: montgomery, map: map});
    var marker2 = new google.maps.Marker({position: atlanta, map: map});
    var marker3 = new google.maps.Marker({position: jackson, map: map});
    var marker4 = new google.maps.Marker({position: tallahassee, map: map});
    var marker5 = new google.maps.Marker({position: columbia, map: map});
    var marker6 = new google.maps.Marker({position: raleigh, map: map});
    var marker7 = new google.maps.Marker({position: nashville, map: map});
    var marker8 = new google.maps.Marker({position: batonrouge, map: map});
}

function togglePins() {
    if (pinsShown === false) {
        initMap();
        pinsShown = true;
    } else if (pinsShown === true) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33, lng: -83},
            zoom: 6
          });
        pinsShown = false;
    }
  }