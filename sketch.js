var r, g, b;
var circleX=0;
function setup() {
  createCanvas(1600, 600);
  // Pick colors randomly
  r = random(255);
  g = random(155);
  b = random(17);
}

function draw() {
  background(249, 255, 131  );
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(circleX, 200, 200, 200);
  circleX=circleX+1;
}


function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
