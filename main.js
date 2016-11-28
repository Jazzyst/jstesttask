function start() {

    function getRndColor() {
        var r = 255 * Math.random() | 0,
                g = 255 * Math.random() | 0,
                b = 255 * Math.random() | 0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    function Rect(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
    }


    function  RectFactory() {
        this.create = function () {
            var x = 620 * Math.random() | 0;
            var y = 0;
            var color = getRndColor();
            var speed = Math.floor(Math.random() * 100 + 1);
            return new Rect(x, y, color, speed);
        }

    }

    var factory = new RectFactory();
    var arr = [];

    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var scoreContrainer = document.getElementById('score');
    var score = 0;
    var gameStarted = false;
    
    canvas.onclick = function(event){
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        
        for (var i in arr) {
            var item = arr[i];

            if (x >= item.x && x<= (item.x + 20) && y >= item.y && y<= (item.y + 20)) {
                arr.splice(i, 1);
                score++;
                scoreContrainer.innerText = score;
            }
        }
    };
    
    document.getElementById('start').onclick = function() {
        gameStarted = true;
        main();
    };
    
    document.getElementById('stop').onclick = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
 				arr = [];
        score = 0;
        gameStarted = false;
    };

    function animate(modifier) {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);

        var rand = Math.random() * 100;
        if (rand < 3) {
            var item = factory.create();
            arr.push(item);
        }

        for (i in arr) { 
            var item = arr[i]; 
            item.y = item.y + (item.speed * modifier);

            ctx.fillStyle = item.color;
            ctx.fillRect(item.x, item.y, 20, 20);

        }

        for (i in arr) { 
            var item = arr[i]; 

            if (item.y >= canvas.clientHeight) {

                arr.splice(i, 1); 
            }

        }
    }

    function main() {

        var now = Date.now();
        var delta = now - then;

        animate(delta / 1000);

        then = now;

        if (gameStarted) {
            requestAnimationFrame(main);
        }



    }
    var then = Date.now();

}




document.body.onload = start;