
var nums =200;
var noiseScale = 800;

function setup() {
    var canvas =  createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas');

    background(235,108,45)
    paragraph = createP("New journey Begin!!! Please Wait...");
    paragraph.class('type');
    paragraph.parent('load');

    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);   

}

  function draw() {

    
    background(0, 0, 90);
  
    push();
    translate(width / 2, height / 2);
  
    ellipseMode(RADIUS);
    // circle(0, 0, 150);
    drawInnerCircles(0, 0, 350, constrain(tan(sin(frameCount) * 90) * 100, 0, 500));
    pop();
  
    // noLoop();
  
  }
  
  function drawInnerCircles(x, y, r, minD) {
    push();
    translate(x, y);
    for (let angle = 0; angle < 360; angle += 1) {
      let d = map(sin(angle * 3) * sin(frameCount * 5), -1, 1, 0, minD);
      let x = cos(angle) * (r - d / 2);
      let y = sin(angle) * (r - d / 2);
      // fill(0,0,100)
      noFill();
      stroke(0, 0, 0, 10);
      circle(x, y, d / 2);
    }
  
    pop();
  }