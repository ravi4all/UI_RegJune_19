window.addEventListener("load", initEvent);
var username;
var email;
var pwd;
var cpwd;
var span;
var score = 0;
var strengthColor;

function initEvent() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    span = document.querySelectorAll(".err");
    progress = document.querySelector(".progress");
    showPwd = document.querySelector(".img");
    username.addEventListener("blur", blankCheck);
    email.addEventListener("keyup", validateEmail);
    pwd.addEventListener("keyup", checkPwdStrength);
    showPwd.addEventListener("click", showPassword);
}

function showPassword() {
    pwd.setAttribute('type', 'text');
}

function blankCheck() {
    var text = username.value;
    if (!text) {
        span[0].innerHTML = "Plese Fill this field";
    } else {
        span[0].innerHTML = "";
    }
}

function validateEmail() {
    // var pattern = /([a-z|0-9]\w+[@]\w+[.]\w{2,3})/;
    var pattern = /([a-z|0-9]\w+[@]\w+[.]\w+[com|in|org|tech])/;
    var str = email.value;
    var test = pattern.test(str);
    // console.log(test);
    if (test) {
        span[1].innerHTML = "Valid";
    } else {
        span[1].innerHTML = "Invalid";
    }
}

function checkPwdStrength() {
    var text = pwd.value;
    if (text.length == 0) {
        span[2].innerHTML = "Please fill password";
        score = 0;
        strengthColor = "red";
    } else if (text.length >= 1 && text.length <= 5) {
        span[2].innerHTML = "Weak Password";
        strengthColor = "red";
        score = 33;
    } else if (text.length > 5 && text.length <= 10) {
        span[2].innerHTML = "Average Password";
        strengthColor = "yellow";
        score = 66;
    } else {
        span[2].innerHTML = "Strong Password";
        strengthColor = "green";
        score = 100;
    }

    progress.style.display = "block";
    progress.style.width = score + "px";
    progress.style.backgroundColor = strengthColor;
}