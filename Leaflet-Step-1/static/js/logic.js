// Creating map object
var myMap = L.map("map", {
  center: [38.8055, -96.0172],
  zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


// Assemble API query URL
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Grab the data with d3
d3.json(url, function(response) {

  // create features from the data
  function createFeatures(feature){
    return{
      // check this line - feature.properties.mag?? row 28
      fillColor: chooseColor(feature.geometry.coordinates[2]),
      color: "black",
      radius: chosenRadius(feature.properties.mag),
      stroke: true,
      weight: 1.0,
      opacity: 1,
      fillOpacity: 1
    };

    //setting the radius of magnitude

    // check this row 54
    function chosenRadius(magnitude) {
      return magnitude * 4;
    }

    //setting the color according to the number of magnitude reported  row 28
    function chooseColor(depth){
      if (depth > 90) {
        return '#ea2c2c';
      } else if(depth > 70) {
        return '#ea822c';        
      } else if (depth > 50) {
        return '#ea822c';
      } else if (depth > 30) {
        return 'ee9c00';
      } else if (depth > 10) {
        return '#d4ee00';
      } else {
        return '#98ee00';
      }
    }
  
    }

    // add geoJSON layer to the map once the file is loaded

L.geoJson(response, {
  //turn each feature into a circleMarker on the map.
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng);
  },
  // set the style for each circle using the styleInfo function
  style: createFeatures,

  // create a popup for each marker to display the magnitude and location     
  onEachFeature: function (feature, layer){
    layer.bindPopup(

      'Magnitude:  '
      + feature.properties.mag
      + "<br>Depth: "
      + feature.geometry.coordinates[2]
      + "<br>Location:  "
      + feature.properties.place
    );

  }
}).addTo(myMap);

// create legend object

var legend = L.control({
  position: 'bottomright'
});

// details of the legend
legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend');

  var grades = [-10, 10, 30, 50, 70, 90];

  var colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"

  ];

  // creating tool tip for each earthquake
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML += "<i style = 'background: " + colors[i] + "'> </i> "
    + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }
  return div;
};

// add legend to the map
legend.addTo(myMap);

})


