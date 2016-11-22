
var currentPos = 0;

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
  ctx.fillRect(320, currentPos, 20, 20);
  currentPos +=1;
  // currentPos += Math.random() * (4 - 1) + 1;
  ctx.fillStyle = getRndColor(); 

  // ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;
  }
  requestAnimationFrame(animate);
  

}

document.body.onload = animate;

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}