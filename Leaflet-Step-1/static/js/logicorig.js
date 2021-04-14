

// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("mapid", {
  center: [45.52, -122.67],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

console.log(API_KEY)


// var myMap = L.map('map', {
//   center: []
// })


// var heat = L.heatLayer([
// 	[50.5, 30.5, 0.2], // lat, lng, intensity
// 	[50.6, 30.4, 0.5],
// ], {radius: 25}).addTo(map);






























// // Creating map object
// var myMap = L.map("map", {
//     center: [116.6685,-33.4441667],
//     zoom: 5
//   });
  
//   // Adding tile layer
//   L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   }).addTo(myMap);
  
//   // Use this link to get the geojson data.
//   var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// // Grab the data with d3
// d3.json(url, function(data) {
//     createFeatures(data.features);
//     console.log(data.features)
// });

// //     // Create a new marker cluster group
// //     var markers = L.markerClusterGroup();
  
// //     // Loop through data
// //     for (var i = 0; i < response.length; i++) {
  
// //       // Set the data location property to a variable
// //       var location = response[i].location;
  
// //       // Check for location property
// //       if (location) {
  
// //         // Add a new marker to the cluster group and bind a pop-up
// //         markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
// //           .bindPopup(response[i].descriptor));
// //       }
  
// //     }
  
// //     // Add our marker cluster layer to the map
// //     myMap.addLayer(markers);
  
// //   })
  


//    addTo(myMap);

  