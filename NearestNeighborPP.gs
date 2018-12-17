// called by nearestNeighbor(), function to determine distance between two cities
function getDirection(city1, city2, unit) {  
  var directions = Maps.newDirectionFinder()
    .setOrigin(city1).setDestination(city2)
    .setMode(Maps.DirectionFinder.Mode.DRIVING)
    .getDirections();
  var d = directions.routes[0].legs[0].distance.text;

  var distance, value = d.split(" ")[0].replace(",", ""), text = d.split(" ")[1];
  if(text == unit) {
    distance = value;
  } else if(text == "km" && unit == "mi") {
    distance = value / 1.6;
  } else {
    distance = value * 1.6;
  }

  var finalDistance = Math.round(distance);
 
 
  // return calculated distance to test()
  return finalDistance;
}

// function to get values of ranges and store into a 1D array
function nearestNeighbor(refRange, refDestination) {
  // debug
  if(refRange != undefined && refDestination != undefined){
    var citiesArray = refRange.join().split(',').filter(Boolean);// turn string into array
    var destination = refDestination;
    var range;
    var result; 
    var min = -1; // distance can never be negative
    var min_value = null;
 
    // forloop to iterate 1d array to get each value (name of city) cell by cell
    for (var r=0; r < citiesArray.length; r++) {
      
      range = citiesArray[r];
      
    
      result = getDirection(range, destination, "km"); // calling getDirection and setting the returned value(calculated distance) to result variable
      
      // finding smalest difference using linear search to determine min value of array 
      if(min > result || min == -1){
        min = result;
        min_value = citiesArray[r];
      }  
      
    }
    
    return min_value;
  }
  
}

function myFunction(xyz) {
  return xyz;
}



