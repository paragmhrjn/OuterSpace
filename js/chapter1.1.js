// constant
const Y_AXIS = 1;
const X_AXIS = 2;

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
    
    
  

    
  

}

  function draw() {
     //Background
     background(0);
    setGradient(0 , 0 , width , height , p, b,  Y_AXIS);
    wave();
    
    
  
  }
  
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
  