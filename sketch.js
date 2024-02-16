const height = 600; // Height, in pixels, of the poster sketch
const detailInterval = 5000; // Time interval for detail update (2 seconds)
let detailCounter = 3; // Initial detail. Both X and Y will have equal detail level
let lastUpdate = 0; // Timestamp of last detail update
let tb; // Text image buffer to be used in main canvas

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

  tb = createGraphics(height * (18 / 24), height);
  tb.textSize(32);
  tb.textAlign(CENTER, CENTER);
}

function draw() {
  background(200);

  //   tb.background();
  tb.fill(0);
  tb.text("Is it really you?", width / 2, height / 2);

  push();
  noFill();
  rotateY(millis() / 10000);
  rotateZ(millis() / 10000);
  stroke(20);
  checkDetail();
  sphere(100, detailCounter, detailCounter);
  pop();

  push();
  texture(tb);
  noStroke();
  plane(width / 2, height / 2);
  pop();
}
