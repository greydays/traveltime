var timeDay = prompt("What time of day? (morning, noon, evening, or night)");
if(timeDay === "morning") {
  traffic = 1.5;
  } else if(timeDay === "noon") {
  traffic = .75;
  } else if(timeDay === "evening") {
  traffic = 3;
  } else if(timeDay === "night") {
  traffic = .5;
  } else {
  alert("Invalid time! Refresh and try again."); 
};

function route(hD, fD, bS, dH, tL) {
  this.hillDistance = hD;
  this.flatDistance = fD;
  this.busStops = bS;
  this.downhillDistance = dH;
  this.trafficlights = tL;
}
var denny = new route(0.75, 1.25, 12, 0, 10)

function vType(s, tF, hF, bF, dhF) {
  this.speed = s;
  this.trafficFactor = tF;
  this.hillFactor = hF;
  this.busStopFactor = bF;
  this.downhillFactor = dhF;
}
//speed = arterial top speed in miles per minute 
//i.e. 35mph = 0.583mpm


var car = new vType(0.583, 1.1, 1, 0, 0.75),
    bus = new vType(0.583, 1.1, 1.2, 0.5, 0.8),
    bike = new vType(0.3, .5, 2, 0, 0.5),
    walk = new vType(.067, .5, 1.2, 0, 0.9);


//speed is converted to distance traveled in 1 minute
var travelTime = function(vType, route){
  return(
    1/vType.speed * route.hillDistance * vType.hillFactor
    + 1/vType.speed * route.flatDistance 
    + 1/vType.speed * route.downhillDistance * vType.downhillFactor
    + vType.busStopFactor * route.busStops
    + route.trafficlights * traffic * vType.trafficFactor
    )
};
var choose = prompt('Choose: "bike" "car" "bus" or "walk"');
if (choose === "bike") {
    alert(travelTime(bike, denny));
  } else if (choose === "car") {
    alert(travelTime(car, denny));
  } else if (choose === "bus") {
    alert(travelTime(bus, denny));
  } else if (choose === "walk") {
    alert(travelTime(walk, denny));
  } else {
    alert("Invalid transportation choice! Refresh and try again!");
  }
