# * STRINGILLUM * 

  Stringillum is an interactive kinetic painting with audio-reactivity. Fundamental design of the work is based on a custom object and its distribution on to  2-dimensional array structure. Aesthetically it aims to have sharp and gothic look which is provided by the curve arrays. The Usage of the such system creates a ligth efect which can be considered as an illusion. The motion design is layered into sub sections. 
  
  * Curves in the array have dynamic height that they are randomly determined and are changing always
  * X,Y locations of the each individual angle of the curve are moving with the speed parameter.
  * One side of the each curve is connected in the middle, other sides are distributed towards the width and height
  * Center of the curves are dynamically changing its location with _Mouse_

This work has also sound. 3 chord drone sample is recorded by me in Ableton. I use the reverb class of the P5.sound Library with long tail.
```javascript
  reverb = new p5.Reverb();
  userStartAudio();
  song.loop();
  song.setVolume(0.05);
  filter.process(song);
  reverb.process(song, 25);
  let bandfreq = map(mouseX, 0, windowWidth, 0, 15000);
  filter.freq(bandfreq);
  ```
This is the object that I created.

```javascript
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
```
This is the 2D Array structure that I hardcoded. (I could use the Javascript 2DArray instead but I wanted to establish it myself first.)
```javascript
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
```

