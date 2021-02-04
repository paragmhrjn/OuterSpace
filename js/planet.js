// function planet(){
//     //planet1
//     fill(13,77,20);
//     ellipse(20, 20, 500, 500);
//     fill(13,30,0);
//     ellipse(1, 20, 500, 500);
//     fill(13,77,20);
//     ellipse(200, 20, 20, 20);
//     fill(13,77,20);
//     ellipse(150, 50, 70, 70);
//     fill(13,77,20);
//     ellipse(50, 205, 50, 50);
//     fill(13,77,20);
//     ellipse(10, 180, 100, 100);
    
// }
// function planet2(){
//      //planet2
//      fill(176,21,42);
//      translate(780,400)
//      ellipse(0, 0, 80, 80);
//      fill(112,13,27);
//      ellipse(-4, 0, 70, 80);
//      fill(176,21,42);
//      ellipse(10, -9, 10, 10);
//      fill(176,21,42);
//      ellipse(18, -5, 5, 5);
 
// }

// function planet3(){
//      //planet3
//     fill(2,40,111);
//     ellipse(100, 900, 900, 900);
//     fill(1,10,90);
//     ellipse(90, 920, 900, 900);
//     fill(12,40,111);
//     ellipse(90, 700, 40, 90);
//     fill(12,40,111);
//     ellipse(90, 700, 40, 90);
//     fill(12,40,111);
//     ellipse(90, 700, 40, 90);
//     fill(12,40,111);
//     ellipse(300, 800, 50, 50);
//     fill(12,40,111);
//     ellipse(400, 900, 170, 200);
// }

// function planet4(){
//      //planet4
//      fill(172,111,42);
//      ellipse(1100, -100, 200, 200);
//      fill(152,77,10);
//      ellipse(1100, -100, 180, 200);
//      fill(172,111,42);
//      ellipse(1070, -100, 40, 40);
//      fill(172,111,42);
//      ellipse(1040, -70, 20, 20);
// }

// function planetRing(){
//     //planet2ring
//     fill(225);
//     rotate(10);
//     ellipse(0, 0, 130, 7);
//     fill(30,22,100);
//     ellipse(-4, 0, 120, 2);

// }



class planet {
    constructor( xaxis, yaxis, width, height, color, move){
        this.a = xaxis;
        this.b = yaxis;
        this.width = width;
        this.height = height;
        this.color = color;
        this.move = move;
        
    }

    show(){
        push()
        fill(this.color);
        translate(this.a, this.b)
        ellipse(0, 0, this.width, this.height);
        this.move = this.a++;
        if(this.move > this.height){
            this.b--;
        }
        pop()
    }
}