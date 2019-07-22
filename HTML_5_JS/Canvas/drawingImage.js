var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
img.src = 'image_1.jpg';
function drawImage(){
    img.onload = function(){
        // obj,x,y,w,h
        context.drawImage(img,0,0,600,400);
    }
}
// drawImage();

function cropImage(){
    img.onload = function(){
        // obj,sx,sy,sw,sh,dx,dy,dw,dh
        context.drawImage(img,0,0,700,300,20,10,300,300);
    }
}
// cropImage();

function img_draw(){
    img.onload = function(){
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                context.drawImage(img,j*150,i*150,150,150);
            }
        }
    }
}
img_draw();

