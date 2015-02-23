$(document).ready(function(){
	
	$("#right div").hover(function(){
		$(this).addClass('high');
			}, function() { 
				$(this).removeClass('high');
	});

	$("#result").hover(function(){
		$(this).addClass('high');
			}, function() { 
				$(this).removeClass('high');
	});
	
	$(".tEntry").click(function(){
			$(this).addClass('selected');
	});
  $('.tEntry').click(function(){
    $('.tEntry').not(this).removeClass('selected');
  });

  $(".mEntry").click(function(){
			$(this).addClass('selected');
	});
  $('.mEntry').click(function(){
    $('.mEntry').not(this).removeClass('selected');
  });
});

var traffic;
	$('#morning').click(function() {traffic = 1.5;});
	$('#noon').click(function() {traffic = .75;});
	$('#evening').click(function() {traffic = 3;});
	$('#night').click(function() {traffic = 0.5;});

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
    ).toFixed(1)
};
var mode;
$('#bike').click(function(){ mode = bike;});
$('#bus').click(function(){ mode = bus;});
$('#walk').click(function(){ mode = walk;});
$('#car').click(function(){ mode = car;});

$('#reset').click(function(){
	$('#foo').load("traveltime.html #foo");
});

$('#go').click(function(){
	$('#time').replaceWith(" " + (travelTime(mode, denny)) + " " + "minutes");
});




