window.addEventListener("load", initEvents);

var moveRight = 0;
var moveLeft = 0;
var defaulImg = "images/stand.png";
var walkImg = "images/walk.gif";
var jump = "images/jump.gif";
var position = "standing";
var flag = true;

function initEvents() {
    document.querySelector("body").addEventListener("keydown", checkKey);
    document.querySelector("body").addEventListener("keyup", defaultImage);
    hulkImg = document.querySelector("#hulkImg");
    background = document.querySelector("#container");
    setTimeout(function() {
        hulkImg.className = "loadHulk";
    }, 2000);
    setTimeout(changeImage, 4000);
}

function checkKey() {
    key = event.keyCode;
    if (key == 39) {
        moveRight += 50;
        background.style.transform = 'translateX(' + (-moveRight) + 'px)';
        position = "walking";
        console.log("Walking");
    } else if (key == 32) {
        position = "jump";
    }
    // position = "standing";
    if (flag) {
        changeImage();
        flag = false;
    }

}

function changeImage() {
    if (position == "walking") {
        hulkImg.src = walkImg;
    } else if (position == "standing") {
        hulkImg.src = defaulImg;
    } else if (position == "jump") {
        hulkImg.src = jump;
        // setTimeout(defaultImage, 4000);
    }
}

function defaultImage() {
    console.log("Function Called...");
    setTimeout(function() {
        flag = true;
        position = "standing";
        hulkImg.src = defaulImg;
    }, 2000);
}