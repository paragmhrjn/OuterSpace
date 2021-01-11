// constant
const Y_AXIS = 1;
const X_AXIS = 2;

// variable
var stars =[];

function setup() {
    createCanvas(windowWidth, windowHeight);
    
  gradient();
     
    for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
  }
  
  function draw() {
    //Background
    background(2,4,33);
    setGradient(0 , 0 , width , height , p , bl,  X_AXIS);
    
    //assigned color to stars
    fill(255,255,255);
    
    for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
    }
    planet();
    planet3();
    planet2();
    planet4();
    astronaut();
    planetRing();

  }

  // window resizedCanvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  // star class //
  class Star {
	constructor() {
		this.x = random(windowWidth);
		this.y = random(windowHeight);
		this.size = random(0.01, 2);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + cos(this.t) * 4;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}
 
function setGradient(x, y, w, h, co, cs, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(co,  cs, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(co, cs, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

 

  
  
