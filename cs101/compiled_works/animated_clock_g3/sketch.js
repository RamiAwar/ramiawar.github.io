

function setup() {
  createCanvas(450, 450);
  background(255);
}
function draw() {
  strokeWeight(2);
  translate(width/2, height/2);
  
  
  background(245, 190, 67);
  
  var radius = int(min(width, height) / 2);
  var numPoints = 60;
  var angle = TWO_PI/numPoints;
  
  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.60;
  var hoursRadius = radius * 0.50;
  var clockDiameter = radius * 1.8;
  
  
  fill(80, 72, 192);
  noStroke();
  ellipse(0, 0, clockDiameter, clockDiameter);

  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  strokeWeight(4);
  stroke(196, 230, 97);
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints ) {
      x = cos(angle*i) * secondsRadius; 
      y = sin(angle*i) * secondsRadius;
      vertex(x, y);
      i++;
  }
  endShape(); 
  
  strokeWeight(5);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(6);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  strokeWeight(8);
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
  
  
  fill(170, 59, 54);;
  textSize(16);
  strokeWeight(0.2);
  x = cos(PI + HALF_PI) * secondsRadius - 10;
  y = sin(PI + HALF_PI) * secondsRadius - 10;
  text("12", x, y);
  
  x = cos(TWO_PI) * secondsRadius + 10;
  y = sin(TWO_PI) * secondsRadius + 5;
  text("3", x, y);
  x = cos(HALF_PI) * secondsRadius - 7;
  y = sin(HALF_PI) * secondsRadius + 20;
  text("6", x, y);
  x = cos(PI) * secondsRadius - 25;
  y = sin(PI) * secondsRadius + 5;
  text("9", x, y);
}