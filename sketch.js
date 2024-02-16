const height = 600;

function setup() {
  createCanvas(height * (18 / 24), height, WEBGL);
}

function draw() {
  background(200);

  push();
  noFill();
  rotateY(millis() / 10000);
  stroke(20);
  sphere(100);
  pop();
}
