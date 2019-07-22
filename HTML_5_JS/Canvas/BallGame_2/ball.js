window.addEventListener("load", init);

var canvas;
var context;
var raf;

function Ball(x, y, move_x, move_y, radius) {
    this.x = x;
    this.y = y;
    this.move_x = move_x;
    this.move_y = move_y;
    this.radius = radius;
}

var ball = {
    ball_list: [],
    radius: 45,
    draw_ball: function() {
        var x = parseInt(Math.random() * 40);
        var y = parseInt(Math.random() * 40);
        // var x = Math.floor(Math.random() * (1100));
        // var y = Math.floor(Math.random() * (400));
        var move_x = parseInt(Math.random() * 10);
        var move_y = parseInt(Math.random() * 10);
        var obj = new Ball(x, y, move_x, move_y, this.radius);
        this.ball_list.push(obj);
    },
    move_ball: function() {
        this.ball_list.forEach(function(obj) {
            context.beginPath();
            context.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2, false);
            // console.log(obj.x,obj.y);
            context.closePath();
            context.fill();
            obj.x += obj.move_x;
            obj.y += obj.move_y;
            if (obj.x > canvas.width - obj.radius || obj.x < 0) {
                obj.move_x = -obj.move_x;
            } else if (obj.y > canvas.height - obj.radius || obj.y < 0) {
                obj.move_y = -obj.move_y;
            }
        });
    }
}

// ball.draw_ball();
for (var i = 0; i < 10; i++) {
    ball.draw_ball();
}

function init() {
    canvas = document.querySelector("#canvas");
    context = canvas.getContext("2d");
    context.strokeRect(0, 0, canvas.width, canvas.height);
    raf = window.requestAnimationFrame(start_game);
}

function start_game() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.move_ball();
    raf = window.requestAnimationFrame(start_game);
}