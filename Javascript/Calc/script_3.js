window.addEventListener("load", initEvents);
var n1 = '';
var flag = false;

function initEvents() {
    numbers = document.getElementsByClassName("num");
    operators = document.getElementsByClassName("opr");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", appendNumbers);
    }
    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", appendOperator);
    }
    document.getElementById("equals").addEventListener("click", calc);
}

function appendNumbers() {
    var num = event.srcElement.innerHTML;
    n1 += num;
    document.getElementById("result").value = n1;
    flag = false;
}

function appendOperator() {
    var opr = event.srcElement.innerHTML;
    if (!flag) {
        n1 += opr;
        flag = true;
    } else {
        n1 = n1.slice(0, n1.length - 1);
        n1 += opr;
    }
    document.getElementById("result").value = n1;
}

function calc() {
    var result = eval(n1);
    document.getElementById("result").value = result;
}