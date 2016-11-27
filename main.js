function start() {
	document.getElementById("start").onclick = function() { 
            main(); 
        };

  document.getElementById("stop").onclick = function() { 
             ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
        };
// ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
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
            var speed = Math.floor(Math.random() * 100 + 10);
            return new Rect(x, y, color, speed);
        }

    }

    var factory = new RectFactory();
    var arr = [];

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function animate(modifier) {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);

        var rand = Math.random() * 100;
        if (rand < 3) {
            var item = factory.create();
            arr.push(item);
        }

        for (i in arr) { // перебираем все квадраты в массиве
            var item = arr[i]; //  получаем отдельный квадрат, который нужно  отрисовать
            item.y = item.y + (item.speed * modifier);

            ctx.fillStyle = item.color;
            ctx.fillRect(item.x, item.y, 20, 20);//  отрисовываем, 

        }

        for (i in arr) { // перебираем все квадраты в массиве
            var item = arr[i]; //  получаем отдельный квадрат, который нужно  отрисовать

            if (item.y >= canvas.clientHeight) {/* если у квадрата больше высоты массива,
             для того чтоб  удалить этот квадрат из массива*/

                arr.splice(i, 1); // начиная с i удаляем 1 квадрат

            }

        }
    }

    function main() {

        var now = Date.now();
        var delta = now - then;

        animate(delta / 1000);

        then = now;

        requestAnimationFrame(main);


    }
    var then = Date.now();

    main()
}




document.body.onload = start;