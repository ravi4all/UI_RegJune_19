window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("body").addEventListener("keyup", checkKey);
}

function checkKey() {
    key = event.keyCode;
    console.log(key);
}