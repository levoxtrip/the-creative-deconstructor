# Bouncing Ball
Move your mouse.

```p5js
p.setup = function() {
  p.createCanvas(400, 400);
};

p.draw = function() {
  p.background(220);
  p.fill(255, 100, 100);
  p.circle(p.mouseX, p.mouseY, 50);
};
```