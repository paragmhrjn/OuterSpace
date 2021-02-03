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

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas');
    noiseDetail(2);
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
   
    
  }

  // window resizedCanvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
 


 

  
  
