
var currentPos = 0; 
var arr = [];
var x = 0;
var i = 0;
function animate() {  
  var canvas = document.getElementById('canvas'); 
  var ctx = canvas.getContext('2d');  
 
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth); 


 if(x<5) {
  
  arr.push(factory.create());
   x++;
     console.log(arr[i])
  }


  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;

  }


  for(i in arr){ 
    var rect = arr[i];

    ctx.fillRect(rect.x, rect.y+=rect.speed, 20, 20);
    ctx.fillStyle = rect.color;

  }
    var countTry = 0;
    countTry++;
    if(countTry < 5){
      requestAnimationFrame(animate)
    }
//запускаем  анимейт
 
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
    var speed = Math.floor(Math.random() * (6 - 1) + 1);
    return new Rect(x, y, color, speed);
  }
  
}

var factory = new RectFactory();
var someRect = factory.create();
console.log(someRect);

