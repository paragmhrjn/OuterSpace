// constant
const Y_AXIS = 1;
const X_AXIS = 2;
// var nums =200;
// var noiseScale = 800;
let synth;
function setup() {
    var canvas =  createCanvas(windowWidth, windowHeight);
    canvas.parent('content');
    synth = new p5.MonoSynth();
    noiseDetail(10);
    gradient();

    

    paragraph = createP("Untold Story Journey To OuterSpace will be continued ...");
    paragraph.class('continue');
    paragraph.parent('content');
    paragraph.style('text-shadow', '0 4px 50px rgb(73, 103, 236)');
    paragraph.mousePressed(playSynth);
    
    
  

    

    // colorMode(HSB, 360, 100, 100, 100);
    // angleMode(DEGREES);   

}

  function draw() {
     //Background
     background(0);
    setGradient(0 , 0 , width , height , p, b,  Y_AXIS);
    wave();
    
    // background(0, 0, 90);
  
    // push();
    // translate(width / 2, height / 2);
  
    // ellipseMode(RADIUS);
    // // circle(0, 0, 150);
    // drawInnerCircles(0, 0, 350, constrain(tan(sin(frameCount) * 90) * 100, 0, 500));
    // pop();
  
    // // noLoop();
  
  }
  
  // function drawInnerCircles(x, y, r, minD) {
  //   push();
  //   translate(x, y);
  //   for (let angle = 0; angle < 360; angle += 1) {
  //     let d = map(sin(angle * 3) * sin(frameCount * 5), -1, 1, 0, minD);
  //     let x = cos(angle) * (r - d / 2);
  //     let y = sin(angle) * (r - d / 2);
  //     // fill(0,0,100)
  //     noFill();
  //     stroke(0, 0, 0, 10);
  //     circle(x, y, d / 2);
  //   }
  
  //   pop();
  // }

  function playSynth() {
    userStartAudio();
  
    let note = random([261.63, 174.61, 349.23, 233.08, 196.56, 311.13, 130.81, 16.35]);
    // note velocity (volume, from 0 to 1)
    let velocity = random();
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur =7;
  
    synth.play(note, velocity, time, dur);
  }
  