$(document).ready(function() {
    // Event listener for navigation links
    $('.nav-item').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the data-gif attribute value
        var gifSrc = $(this).data('gif');

        // If INTRO nav-item is clicked, show the map
        if ($(this).text().trim() === 'INTRO') {
            $('#map').show(); // Show the map
            initMap(); 

           
            $('.gif-item').hide();
        } else {
         
            $('#map').hide();
            $('#' + $(this).data('navlink')).show(); 
        }
    });
});

function initMap() {
    
    var map = L.map('map').setView([51.505, -0.09], 3); 

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        id: 'mapbox.light', 
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    
    var cities = [
        { name: 'Tbilisi', coordinates: [41.7151, 44.8271] },
        { name: 'Espoo', coordinates: [60.2055, 24.6559] },
        { name: 'Klodzko', coordinates: [50.4333, 16.6667] },
        { name: 'Reykjavik', coordinates: [64.1466, -21.9426] }
    ];

    
    var markers = L.markerClusterGroup(); 
    cities.forEach(function(city) {
        var marker = L.marker(city.coordinates).bindPopup(city.name);
        markers.addLayer(marker);
    });

    map.addLayer(markers);
}
