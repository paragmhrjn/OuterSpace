// star class //
class Star {
	constructor() {
		this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz = this.z;
	}
    
    update(){
        this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }

    }
	show() {
		fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 1, width);
    var sy = map(this.y / this.z, 0, 1, 1, height);

    var r = map(this.z, 0, width, random(0.5, 10), 1);
    ellipse(sx, sy, r, r);

    var px = map(this.x * this.pz, 100, 0, 20, width);
    var py = map(this.y * this.pz, 10, 2, 0, height);

    this.pz = this.z;

    line(px, py, sx, sy);
    
    }
    

}