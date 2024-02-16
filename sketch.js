const height = 600; // Height, in pixels, of the poster sketch
const detailInterval = 2000; // Time interval for detail update (2 seconds)
let detailCounter = 3; // Initial detail. Both X and Y will have equal detail level
let lastUpdate = 0; // Timestamp of last detail update

const checkDetail = () => {
  if (millis() - lastUpdate < detailInterval) return;
  lastUpdate = millis();
  if (detailCounter >= 16) {
    detailCounter = 3;
    return;
  }
  detailCounter += 2;
};

function setup() {
  createCanvas(height * (18 / 24), height, WEBGL);
}

function draw() {
  background(200);

  push();
  noFill();
  rotateY(millis() / 10000);
  rotateZ(millis() / 10000);
  stroke(20);
  checkDetail();
  sphere(100, detailCounter, detailCounter);
  pop();
}
