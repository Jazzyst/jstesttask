
var currentPos = 0;

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
 
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
 

  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;

  }

  for(i in arr){
    var rect = arr[i];

    ctx.fillRect(rect.x, rect.y+=rect.speed, 20, 20);
    ctx.fillStyle = rect.color;
    
  }

  requestAnimationFrame(animate);
  
  
}

document.body.onload = animate;
// ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
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


function  RectFactory(){
  this.create =  function(){
    var x = 620 * Math.random()|0;
    var y = 0;
    var color = getRndColor();
    var speed = Math.random() * (6 - 1) + 1;
    return new Rect(x, y, color, speed);
  }
  
}

var factory = new RectFactory();
var someRect = factory.create();
console.log(someRect);
var arr = [];
arr.push(someRect);

function init() {
    var myFunction = function() {
        animate();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
    }
    myFunction();
}

(function() {
    init();
});