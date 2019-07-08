window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", showName);
}

function showName() {
    var box_1 = document.getElementById("box_1");
    var username = box_1.value;
    document.getElementById("output").innerHTML = username;
}