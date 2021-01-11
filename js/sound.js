//Using Web Audio Api

//constant to represent a new instance of web audio API is audio context
const ctx = new (window.AudioContext || window.webkitAudioContext )();
//create oscillator method on the context
const osc = ctx.createOscillator();
//to connect oscillator with computer audio output
osc.connect(ctx.destination);
//default frequency value (440 hertz or cycle per second)
osc.frequency.value = 500;
//start a osillator playing
osc.start(0);
//stop a osillator playing after 4 sec
osc.stop(4);

