$window.addEventListener("load", initMap);

var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.706361,
            lng: 12.539168
        },
        zoom: 18
    });

    var image = 'kea.png'
    var marker1 = new google.maps.Marker({
        position: {
            lat: 55.706415,
            lng: 12.538865
        },
        map: map,
        title: 'Indgang',
        icon: image
    });


    var image = 'ryge.png'
    var marker2 = new google.maps.Marker({

        position: {
            lat: 55.706233,
            lng: 12.539722
        },
        map: map,
        title: 'Rygerområdet',
        icon: image
    });

    var image = 'mad.png'
    var marker3 = new google.maps.Marker({
        position: {
            lat: 55.706437,
            lng: 12.539334
        },
        map: map,
        title: 'Kantinen',
        icon: image
    });
    var image = 'parking.png'
    var marker4 = new google.maps.Marker({
        position: {
            lat: 55.706216,
            lng: 12.540425
        },
        map: map,
        title: 'Parkeringspladsen',
        icon: image
    });


    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker1.getPosition());
        }, 3000);
    });

    marker1.addListener('click', function () {
        map.setZoom(20);
        map.setCenter(marker1.getPosition());
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker2.getPosition());
        }, 3000);
    });

    marker2.addListener('click', function () {
        map.setZoom(21);
        map.setCenter(marker2.getPosition());
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker3.getPosition());
        }, 3000);
    });

    marker3.addListener('click', function () {
        map.setZoom(22);
        map.setCenter(marker3.getPosition());
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker4.getPosition());
        }, 3000);
    });

    marker4.addListener('click', function () {
        map.setZoom(23);
        map.setCenter(marker4.getPosition());
    });


    // infowindow
    var infowindow = new google.maps.InfoWindow({
        content: "Indgangen til KEA",
        position: {}
    });

    infowindow.open(map, marker1);

    var infowindow1 = new google.maps.InfoWindow({
        content: "Her må du ryge",
        position: {}
    });

    infowindow1.open(map, marker2);





}
