window.addEventListener("load", initEvent);
var audio;

function initEvent() {
    loadSongs();
    audio = document.querySelector("#audio");
}

function loadSongs() {
    var ul = document.querySelector("#songsList");
    // for (var i = 0; i < songs.length; i++) {
    //     var li = document.createElement("li");
    //     var span = document.createElement("span");
    //     span.innerHTML = songs[i].s_name;
    // }
    songs.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.setAttribute('title', obj.song_id);
        li.appendChild(img);
        // console.log(obj);
        li.appendChild(span);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
    })
}

function playSong() {
    var s_id = event.srcElement.title;
    // console.log(tag);
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_id == s_id) {
            var songUrl = songs[i].song_url;
            break;
        }
    }
    audio.src = songUrl;
    audio.play();
}