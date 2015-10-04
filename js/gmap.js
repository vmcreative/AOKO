function initialize(){
  var map = new google.maps.Map(document.getElementById('mapCanvas'), {
    zoom: 11,
    center: {lat: 41.933156, lng: -87.727663},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    panControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT,
    },
    styles: [
      {"featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [
        {"color": "#444444"}
       ]
      },
      {"featureType": "administrative.country",
       "elementType": "geometry.fill",
       "stylers": [
        {"visibility": "on"}
       ]
      },
      {"featureType": "administrative.province",
       "elementType": "labels.icon",
       "stylers": [
        {"hue": "#ff0000"},
        {"visibility": "on"}
       ]
      },
      {"featureType": "landscape",
       "elementType": "all",
       "stylers": [
        {"color": "#f3f3f3"}
       ]
      },
      {"featureType": "poi",
       "elementType": "all",
       "stylers": [
        {"visibility": "off"}
       ]
      },
      {"featureType": "road",
       "elementType": "all",
       "stylers": [
        {"saturation": -100},
        {"lightness": 45}
       ]
      },
      {"featureType": "road.highway",
       "elementType": "all",
       "stylers": [
        {"visibility": "simplified"}
       ]
      },
      {"featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [
        {"visibility": "off"}
       ]
      },
      {"featureType": "transit",
       "elementType": "all",
       "stylers": [
        {"visibility": "off"}
       ]
      },
      {"featureType": "water",
       "elementType": "all",
       "stylers": [
        {"color": "#46bcec"},
        {"visibility": "on"}
       ]
      }
    ]
  });
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AOKO Studio</h1>'+
      '<div id="bodyContent">'+
      '<p>2850 N Pulaski Rd #5, Chicago, IL 60641</p>'+
      '<p>phone: 312.888.6592</p>'+
      '<a href="https://www.google.com/maps/place/2850+N+Pulaski+Rd,+Chicago,+IL+60641/@41.9331559,-87.727652,17z/data=!3m1!4b1!4m2!3m1!1s0x880fcd061812b225:0x80a25ecbee81223e" target="_blank">'+
      'Directions</a>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 160
  });
  var marker = new google.maps.Marker({
    position: {lat: 41.933156, lng: -87.727663},
    map: map,
    title: 'AOKO Studio'
  });
  marker.addListener('click', function(){
    infowindow.open(map, marker);}
  );
  infowindow.open(map,marker);
}
  google.maps.event.addDomListener(window, 'load', initialize);