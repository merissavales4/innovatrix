var map = L.map('map').setView([15.4909,73.8278],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map);

var marker = L.marker([15.4909,73.8278]).addTo(map);

marker.bindPopup("You are here").openPopup();