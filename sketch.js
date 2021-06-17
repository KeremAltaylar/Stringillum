let distances = [];
let maxDistance;
let spacer;
let buk;
let ellipses = [];
let colors = [];
let reverb;

function preload() {
  song = loadSound("Soundsc.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode("center");
  reverb = new p5.Reverb();
  spacer = 100;
  buk = 100;
  for (let x = windowWidth / 2; x < windowWidth; x += spacer) {
    for (let y = windowHeight / 2; y < windowHeight - 10; y += spacer) {
      let b = new dEllipse(
        x,
        y,
        random(0, 400),
        random(0, 1000),
        10,
        10,
        10,
        255,
        255
      );
      ellipses.push(b);
      let c = new dEllipse(
        x,
        y,
        random(0, 2000),
        random(180),
        random(0, 1000),
        random(0, 10000),
        1,
        randomGaussian(40, 233),
        0,
        0
      );
      ellipses.push(c);
    }
  }
  //brush1 = new Brush(0, 0, 250, 500, 20, 20, 10, 100, 100, 1000, 10);
  for (let x = 0; x < windowWidth - 600; x += spacer) {
    for (let y = 0; y < windowHeight - 10; y += spacer) {
      let d = new dEllipse(
        x,
        y,
        random(0, 40),
        random(30, buk),
        noise(1000, 500, 5000),
        noise(10),
        1,
        255,
        255
      );
      ellipses.push(d);
      let f = new dEllipse(
        x,
        y,
        random(0, 20),
        random(1800),
        random(0, 10),
        random(0, 100),
        1,
        randomGaussian(0, 233),
        255,
        255
      );
      ellipses.push(f);
    }
  }
  userStartAudio();
  song.loop();
  song.setVolume(0.7);
  reverb.process(song, 100);
}

function draw() {
  smooth();
  //brush1.displaysSphere();
  for (i = 0; i < ellipses.length; i++) {
    ellipses[i].move();
    ellipses[i].bounces();
    ellipses[i].display();
    ellipses[i].update();
  }

  fill(0);
  stroke(255);
  rect(0, 0, windowWidth * 2, 50);
  rect(0, windowHeight, windowWidth * 2, 50);
  rect(0, 0, 50, windowHeight * 2);
  rect(windowWidth, 0, 50, windowHeight * 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class dEllipse {
  constructor(xpos, ypos, radx, rady, spcx, spcy, speed, col1, col2, col3) {
    this.xp = xpos;
    this.yp = ypos;
    this.rd = radx;
    this.ry = rady;
    this.scx = spcx;
    this.scy = spcy;
    this.sped = speed;
    this.cl1 = col1;
    this.cl2 = col2;
    this.cl3 = col3;
  }
  move() {
    this.xp += this.scx;
    this.yp += this.scy;
    //this.rd += this.ax;
    //this.ry += this.ax2;
    //this.scx += this.ax2;
    //this.scy += this.ax;
  }
  bounces() {
    if (this.xp > windowWidth || this.xp < 0 || this.xp == 0) {
      this.scx *= -this.sped;
      //this.col1+= 0.000001;
      //this.col2 +=2;
      //this.col3 +=5;
    }
    if (this.yp > windowHeight || this.yp < 0 || this.yp == 0) {
      this.scy *= -this.sped;
      // this.col1+= 0.000001;
      //this.col2 +=2;
      //this.col3 +=5;
    }
  }
  display() {
    //colorMode(HSB, 255, 255, 255);
    smooth();
    stroke(this.cl1);
    fill(this.cl1, this.cl2, this.cl3);
    curve(
      this.xp,
      this.yp,
      this.rd,
      this.ry,
      this.xp,
      this.yp,
      this.rd,
      this.ry
    );
  }
  update() {
    this.rd = mouseX;
    this.ry = mouseY;
    this.sp = mouseY / 4;
  }
}

function mousePressed() {
   background(0);
 
   // song.loop();
   // song.setVolume(0.05);
   //  reverb.process(song, 100);
  
}
