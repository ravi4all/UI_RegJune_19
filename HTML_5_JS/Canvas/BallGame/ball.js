window.addEventListener("load", init);

var ballX = 45;
var ballY = 45;
var move_x = 10;
var move_y = 10;
var ball_radius = 45;
var canvas;
var context;
var raf;

function init() {
    canvas = document.querySelector("#canvas");
    context = canvas.getContext("2d");
    context.strokeRect(0, 0, canvas.width, canvas.height);
    // canvas.onmouseover = function(){
    //     raf = window.requestAnimationFrame(move_ball);
    // }
    raf = window.requestAnimationFrame(move_ball);
    draw_ball();
}

function draw_ball() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 10;
    context.beginPath();
    context.arc(ballX, ballY, ball_radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

function move_ball() {
    // setInterval(function(){
    //     move_x = 1;
    //     move_y = 1;
    //     draw_ball();
    // },5);
    draw_ball();
    ballX += move_x;
    ballY += move_y;
    raf = window.requestAnimationFrame(move_ball);
    console.log(ballY);
    if (ballX > canvas.width - ball_radius || ballX < ball_radius) {
        move_x = -move_x;
        // console.log(move_x);
    } else if (ballY > canvas.height - ball_radius || ballY < ball_radius) {
        move_y = -move_y;
        // console.log(move_y);
    }

}

// move_ball();