// constant
const Y_AXIS = 1;
const X_AXIS = 2;

// variable
var stars =[];
let planets =[];
var speed;
var paragraph;
var link;
var heading;


var sinOcr;
var env;
var a;

// Times and levels for the ASR envelope
var attackTime = 0.1;
var attackLevel = 0.09;
var decayTime = 0.03;
var susPercent = 0.1;
var sustainTime = 1;
var releaseTime = 0.05;
var releaseLevel = 0.01;

var midiSequence = [261.63, 174.61, 349.23, 233.08, 196.56, 311.13, 130.81, 261.63, 174.61, 349.23, 233.08, 196.56, 311.13, 130.81, 261.63, 174.61, 349.23, 233.08, 196.56, 311.13, 130.81]; 
var duration = 200;
// Set the note trigger
var trigger;

// An index to count up the notes
var note = 0;
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas');
    noiseDetail(4);
    gradient();
    
    paragraph = createP("Welcome to a New Journey to Outer Space !!!");
    paragraph.class('type');
    paragraph.parent('load');

    heading = createElement('h3', 'Journey To Outer Space');
    heading.id('title1');
    heading.parent('content');
    heading.style('text-shadow', '0 10px 50px rgb(150, 103, 236)');
    link =createA("./chapter1.html", 'Start', '_self');
    link.id('start');
    link.parent('content');
    link.style('text-shadow', '0 4px 50px rgb(73, 103, 236)');
    

    

    for (var i = 0; i < 3000; i++) {
		stars[i] = new Star();
  }
  
  let greenP_color = color(13,77,20);
  let redp_color = color(176,21,42);
  let bluep_color = color(2,40,111);
  let orangep_color = color(172,111,42);
  let purplep_color = color(142,60,214);

  greenP = new planet(20, 20, 500, 500, greenP_color);
  redP = new planet (200,700, 150, 150, redp_color);
  blueP = new planet (940, 150, 900, 900, bluep_color);
  orangeP = new planet (1900, 200, 200, 200, orangep_color);
  purpleP = new planet (1700, 500, 150, 150, purplep_color);
  planets = [greenP, redP, blueP, orangeP, purpleP];



  trigger = millis();

  sinOcr = new p5.SinOsc();
  sinOcr.amp();
  sinOcr.start(2);
  

  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  a = new p5.Amplitude();
  }
  
  function draw() {
    //Background
    background(0);
    setGradient(0 , 0 , width , height , bl, b,  Y_AXIS);
   
    wave();

    //assigned color to stars
    speed = random(5);
    fill(255,255,255);
     
    for (var i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }

    for(a in planets){
      planets[a].show();
    }
  
    
    astronaut();

    var size = 10;
  background(20, 20, 20, 70);
 
  // If the determined trigger moment in time matches up with the computer clock and we if the 
  // sequence of notes hasn't been finished yet the next note gets played.
  if ((millis() > trigger)){
    // midiToFreq transforms the MIDI value into a frequency in Hz which we use to control the triangle oscillator
    sinOcr.freq(midiToFreq(midiSequence[note]));

    // The envelope gets triggered with the oscillator as input and the times and levels we defined earlier
    // play accepts an object to play, time from now, and a sustain time—how long to hold before the release.
    env.play(sinOcr, 0, sustainTime);

    // Create the new trigger according to predefined durations and speed it up by deviding by 1.5
    trigger = millis() + duration;
    
    

   
  }
   
    
  }

  // window resizedCanvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
 


 

  
  
