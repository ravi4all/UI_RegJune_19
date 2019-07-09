window.addEventListener("load", initEvent);
var f_num;
var s_num;

function initEvent() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
}

function add() {
    result = parseInt(f_num.value) + parseInt(s_num.value);
    document.getElementById("result").innerHTML = result;
}

function sub() {
    result = parseInt(f_num.value) - parseInt(s_num.value);
    document.getElementById("result").innerHTML = result;
}