function gradient(){
   //Define Colors
   p = color(10,27,100);
   b = color(16,47,204);
   bl = color(94,0,23);
  
 }
 
 function wave() {
  noStroke();
  fill(10,20,45);
	var zoff=frameCount*0.045;
	var yoff=1;
	for(var y=0;y<height+20;y+=4){
		var xoff=0;
		beginShape();
		for(var x=0;x<width+10;x+=3){
			var n=noise(xoff,yoff,zoff);
			var wave=map(n,0,1,-10,5);
			curveVertex(x,y+wave);
			line(x,y+wave,30);
		
			xoff+=0.004;
		}
		endShape();
		yoff+=0.002;
	}
}


function setGradient(x, y, w, h, co, cs, axis) {
	noFill();
  
	if (axis === Y_AXIS) {
	  // Top to bottom gradient
	  for (let i = y; i < y + h; i++) {
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
 