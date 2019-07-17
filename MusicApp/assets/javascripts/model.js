function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.del = false;
}

var obj = {
    "playList": [],
    addSong: function(id, name, url, image) {
        var s = new Song(id, name, url, image);
        this.playList.push(s);
        // console.log(this.playList);
    },
    deleteSong: function(id) {
        // console.log("Inside Delete");
        // for (var i = 0; i < this.playList.length; i++) {
        //     console.log(this.playList[i].id, id);
        //     if (this.playList[i].id == id) {
        //         console.log(i, this.playList[i].id, id);
        //         this.playList.splice(i, 1);
        //         console.log(this.playList);
        //         break;
        //     }
        // }
        var song = this.playList.filter(function(x) {
            return x.id == id;
        });
        song[0].del = true;
        console.log(this.playList);
        this.playList = this.playList.filter(function(x) {
            return x.del == false;
        });
        console.log(this.playList);
    }
}