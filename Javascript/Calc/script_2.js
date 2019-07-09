window.addEventListener("load", initEvent);
var f_num;
var s_num;

function initEvent() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = event.srcElement.innerHTML;
    expression = parseInt(f_num.value) + opr + parseInt(s_num.value);
    // console.log(result);
    result = eval(expression);
    document.getElementById("result").innerHTML = result;
}