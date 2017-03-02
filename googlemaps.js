   var map;

   function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
           center: {
               lat: 55.706415,
               lng: 12.538865
           },
           zoom: 17
       });

       var marker = new google.maps.Marker({
           position: {
               lat: 55.706415,
               lng: 12.538865
           },
           map: map,
           title: 'Hello World!'
       });
   }
