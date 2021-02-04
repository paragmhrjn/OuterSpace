// constant
const Y_AXIS = 1;
const X_AXIS = 2;

// variable
var stars =[];
let planets =[];
var speed;
var heading;
var link;
let synth;

function setup() {
    var canvas =  createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas');
    noiseDetail(4);
    gradient();
  
    paragraph = createP("New journey Begin!!! Please Wait...");
    paragraph.class('type');
    paragraph.parent('load');

    heading = createElement('h3', 'Chapter 1');
    heading.class('title4');
    heading.parent('content');
    heading.style('text-shadow', '0 4px 50px rgb(73, 103, 236)');

    heading = createElement('h3', 'Space Station');
    heading.class('title5');
    heading.parent('content');
    heading.style('text-shadow', '0 4px 50px rgb(73, 103, 236)');

    synth = new p5.MonoSynth();


    link =createA("./main.html", '<< Back', '_self');
    link.class('back');
    link.parent('content');
    link.mousePressed(playSynth);
    
    
    link =createA("./chapter1.1.html", 'The Journey Begin... >>', '_self');
    link.class('click');
    link.parent('content');
    link.mousePressed(playSynth);
    
     
    for (var i = 0; i < 3000; i++) {
		stars[i] = new Star();
  }

  let bluep_color = color(2,40,111);
  let moon_color = color(225,225,220);
  let orangep_color = color(172,111,42);
  blueP = new planet (400, 900, 1200, 1200, bluep_color);
  moon = new planet (200,200, 100, 100, moon_color);
  orangeP = new planet (1900, 200, 200, 200, orangep_color);
  planets = [blueP, moon, orangeP];
  canvas.mouseOver(playSynth);
  
}

function draw() {
    //Background
    background(0);
    setGradient(0 , 0 , width , height , p, bl,  Y_AXIS);
    
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
