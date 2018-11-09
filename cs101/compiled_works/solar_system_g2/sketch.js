function setup() {
  createCanvas(400, 400);
}

var mercurySpeed = 1;
var venusSpeed = 2;
var earthSpeed = 3;
var marsSpeed = 4;
var jupiterSpeed = 5;
var saturnSpeed = 6;
var uranusSpeed = 7;
var neptuneSpeed = 8;

var mercurySize = 5;
var venusSize = 10;
var earthSize = 12;
var marsSize = 8;
var jupiterSize = 20;
var saturnSize = 15;
var uranusSize = 15;
var neptuneSize = 12;

var mercuryOrbit = 1;
var venusOrbit = 2;
var earthOrbit = 3;
var marsOrbit = 4;
var jupiterOrbit = 5;
var saturnOrbit = 6;
var uranusOrbit = 7;
var neptuneOrbit = 8;

var base = 45;
var incrX = 30;
var incrY = 20;

var drawPlanet = function(time, speed, orbit, size) {
  var orbitPosition = (time * speed) / 360;
  
  var radiusX = (base + incrX * pow(orbit, 1.1)) / 2;
    var radiusY = (base + incrY * pow(orbit,1.1)) / 2;
    var positionX = radiusX * cos(orbitPosition);
    var positionY = radiusY * sin(orbitPosition);
  
  ellipse(positionX, positionY, size, size);
};

var drawSolarSystem = function(time) {
    background(6, 14, 48);
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, base, base);
    
    noFill();
    stroke(92, 92, 92);
    strokeWeight(1);
    for (var i = 1; i <= 8; i+=1) {
        var diameterX = base + incrX * pow(i, 1.1);
        var diameterY = base + incrY * pow(i, 1.1);
        ellipse(0, 0, diameterX, diameterY);
    }

    
    noStroke();
    fill(0, 255, 0);
    drawPlanet(time, mercurySpeed, mercuryOrbit, mercurySize); 
    
    fill(19, 237, 196);
    drawPlanet(time, venusSpeed, venusOrbit, venusSize);

    fill(36, 136, 212);
    drawPlanet(time, earthSpeed, earthOrbit, earthSize);
  
    fill(0,0,255);
    drawPlanet(time, marsSpeed, marsOrbit, marsSize);
   
    fill(240, 57, 130);
    drawPlanet(time, jupiterSpeed, jupiterOrbit, jupiterSize);
  
    fill(127, 224, 142);
    drawPlanet(time, saturnSpeed, saturnOrbit, saturnSize);
  
    fill(113, 222, 230);
    drawPlanet(time, uranusSpeed, uranusOrbit, uranusSize);
  
    fill(206, 89, 235);
    drawPlanet(time, neptuneSpeed, neptuneOrbit, neptuneSize);
    
};

var speed = 1; 
var currentTime = 0;
var draw = function() {
    translate(200, 200);
    drawSolarSystem(currentTime);
    currentTime += speed;
};