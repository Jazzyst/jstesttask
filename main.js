
var currentPos = 0;

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
  ctx.fillRect(320, currentPos, 20, 20);
  currentPos += 1;
  

  // ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;
  }
  requestAnimationFrame(animate);
  
  for(i in arr){
    var rect = arr[i];
    ctx.fillRect(rect.x, rect.y, 20, 20);
    
  }
}

document.body.onload = animate;

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function Rect(x, y, color, speed){
  this.x = x;
  this.y = y;
  this.color = color;
  this.speed = speed;
}
var rect = new Rect(x, y, color, speed);
var arr = [];
arr.push(rect);

function  RectFactory(){
  this.create =  function(){
    var x = 620 * Math.random()|0;
    var y = y;
    var color = getRndColor();
    var speed = 4 * Math.random()|0;
    return new Rect(x, y, color, speed);
  }
  
}

var factory = new RectFactory();
var someRect = factory.create();
console.log(someRect);
