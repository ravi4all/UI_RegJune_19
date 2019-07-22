var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

function rect() {
    context.fillRect(25, 25, 250, 250);
    context.clearRect(125, 125, 50, 50);
    context.strokeRect(0, 0, 300, 300);
}
rect()

function line() {
    context.beginPath();
    // Starting x and y
    context.moveTo(0, 200);
    // End x and y
    context.lineTo(400, 55);
    context.lineWidth = 10;
    context.stroke();
}
// line()

function triangle() {
    context.beginPath();
    // Starting x and y
    context.moveTo(70, 50);
    // End x and y
    context.lineTo(100, 25);
    context.lineTo(100, 75);
    // context.lineWidth = 10;
    context.fill();
}
// triangle()

function arc() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    // var startangle = 1.1 * Math.PI;
    // var endAngle = 1.9 * Math.PI;
    var startangle = 0;
    var endAngle = Math.PI * 2;
    context.beginPath();
    context.arc(x, y, radius, startangle, endAngle, false);
    context.lineWidth = 15;
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();
}
// arc();

function quadraticCurve() {
    context.beginPath();
    context.moveTo(50, 150);
    context.quadraticCurveTo(300, 0, 200, 200);
    context.lineWidth = 10;

    // line color
    context.strokeStyle = 'black';
    context.stroke();
}
// quadraticCurve();

function bezierCurve() {
    context.beginPath();
    context.moveTo(188, 130);
    context.bezierCurveTo(140, 10, 388, 10, 388, 170);
    context.lineWidth = 10;

    // line color
    context.strokeStyle = 'black';
    context.stroke();
}
// bezierCurve();