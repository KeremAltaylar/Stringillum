* STRINGILLUM * 

Stringillum is an interactive kinetic painting with audio-reactivity. 
Fundamental 

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
