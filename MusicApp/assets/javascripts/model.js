function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
}

var obj = {
    "playList": [],
    addSong: function(id, name, url, image) {
        var s = new Song(id, name, url, image);
        this.playList.push(s);
        console.log(this.playList);
    },
    deleteSong: function() {

    }
}