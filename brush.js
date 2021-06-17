



 


  

class Brush {
  constructor(xposi, yposi, xsiz, ysiz, xdire, ydire, spd, lmt, xsrand, ysrand, num) {
    this.xpos = xposi;
    this.ypos = yposi;
    this.xsize = xsiz;
    this.ysize = ysiz;
    this.xdir = xdire;
    this.ydir = ydire;
    this.speed = spd
    this.intxdir = xdire;
    this.intydir = ydire;
    this.limit = lmt;
    this.xs = xsrand;
    this.ys = ysrand;
    this.numCirc = num;
    this.grayvalues = 255 / (num)
    this.steps = xsiz/ num

  }
  moves() {
    this.xpos = this.xpos + this.xdir;
    this.ypos = this.ypos + this.ydir;
  }
  randomSize() {
    this.xsize = random(0, this.xs);
    this.ysize = random(0, this.ys);
  }
  bounces() {
    if (this.xpos > width || this.xpos < 0) {
      this.xdir *= -(this.speed);
    }
    if (this.ypos > height || this.ypos < 0) {
      this.ydir *= -(this.speed);
    }
  }
  displaysEl() {
    ellipse(this.xpos, this.ypos, this.xsize, this.ysize);
  }
  displaysSphere() {
    for (let i = 0; i < this.numCirc; i++) {
     let k; 
      k = map(i,0,this.numCirc,70,255);
      fill((k));
      ellipse(this.xpos, this.ypos, this.xsize - i * this.steps, this.xsize - i * this.steps);
    }
  }
  displaysRect() {
    rect(this.xpos, this.ypos, this.xsize, this.ysize);
  }
  accelerationLimit() {
    if (this.xdir > this.limit || this.ydir > this.limit) {
      this.xdir = this.intxdir;
      this.ydir = this.intydir;
    }
    if (this.xdir < -(this.limit) || this.ydir < -(this.limit)) {
      this.xdir = -1 * (this.intxdir);
      this.ydir = -1 * (this.intydir);
    }
  }
}

function mousePressed() {
  background(255);
}

