

var arr = [];
var x = 0;

var i = 0;
function animate() {  
  var canvas = document.getElementById('canvas'); 
  var ctx = canvas.getContext('2d');  
 
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth); 


 
   var rand = Math.random()*100;
if(rand < 3) {
  x++;
  arr.push(factory.create());
}
  
     console.log(arr[i])
  


  


  for(i in arr){ // перебираем все квадраты в массиве
    var rect = arr[i]; //  получаем отдельный квадрат, который нужно  отрисовать

    ctx.fillRect(rect.x, rect.y+=rect.speed, 20, 20);//  отрисовываем, 
    ctx.fillStyle = rect.color;


   if (rect.y >= canvas.clientHeight) {/* если у квадрата больше высоты массива,
    для того чтоб  удалить этот квадрат из массива*/
  
      arr.splice(i, 1); // начиная с i удаляем 1 квадрат
      console.log(arr);
    }
   





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
    var speed = Math.floor(Math.random() * (4 - 1) + 1);
    return new Rect(x, y, color, speed);
  }
  
}

var factory = new RectFactory();
var someRect = factory.create();
// console.log(someRect);

