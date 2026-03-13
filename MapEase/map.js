// Create map

var map = L.map('map').setView([19.0760,72.8777],13);

// Map tiles

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

maxZoom:19,
attribution:'© OpenStreetMap'

}).addTo(map);

// Default marker

var marker = L.marker([19.0760,72.8777]).addTo(map);

marker.bindPopup("Welcome to MapEase").openPopup();


// Detect user location

map.locate({setView:true,maxZoom:16});

map.on('locationfound',function(e){

L.marker(e.latlng)
.addTo(map)
.bindPopup("Your Location")
.openPopup();

});
L.Routing.control({
waypoints:[
L.latLng(19.0760,72.8777),
L.latLng(19.2183,72.9781)
]
}).addTo(map);