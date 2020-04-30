var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
  }

  Shape.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  Shape.prototype.update = function() {

    Shape.prototype.collisionDetect = function() {
        for (var j = 0; j < balls.length; j++) {
          if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + balls[j].size) {
              balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
          }
        }
      }

    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    } 
    this.x += this.velX;
    this.y += this.velY;
  }

  var balls = [];

while (balls.length < 25) {
  var size = random(10,20);
  var ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}
loop();

function Ball(x, y, velX, velY, exists, color, size){
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);
Object.defineProperty(Ball.prototype, 'constructor', {
value: Ball,
enumerable: false,
writable: true});

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
Ball.prototype.update = function() {
  Ball.prototype.collisionDetect = function() {
      for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
          var dx = this.x - balls[j].x;
          var dy = this.y - balls[j].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          }
        }
      }
    }
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  } 
  this.x += this.velX;
  this.y += this.velY;
}

function EvilCircle(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
Object.defineProperty(EvilCircle.prototype, 'constructor', {
value: Ball,
enumerable: false,
writable: true});

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();
}

EvilCircle.prototype.update = function() {
  EvilCircle.prototype.collisionDetect = function() {
      for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
          var dx = this.x - balls[j].x;
          var dy = this.y - balls[j].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          }
        }
      }
    }
  if ((this.x + this.size) >= width) {
    this.x = -(this.x);
  }
  if ((this.x - this.size) <= 0) {
    this.x = -(this.x);
  }
  if ((this.y + this.size) >= height) {
    this.y = -(this.y);
  }
  if ((this.y - this.size) <= 0) {
    this.y = -(this.y);
  } 

}
