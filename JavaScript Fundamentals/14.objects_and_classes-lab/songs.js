function songs(input){
    let n = input.shift();
    let find = input.pop();

    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    for (value of input){
        let [typeList, name, time] = value.split('_');
        let song = new Song(typeList, name, time);
        songs.push(song)
    }

    if (find == "all"){
        for (let currentSong of songs){
            console.log(currentSong.name);
        }
    } else {
        for (let currentSong2 of songs){
            if (find == currentSong2.typeList){
                console.log(currentSong2.name);
            }
        }
    }
}