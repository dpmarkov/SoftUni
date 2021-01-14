function timeToWalk(steps, length, speed) {
    let path = steps*length; //path to university in meters
    speed = speed * 1000; //meters per hour

    let time = path / speed * 3600; //time in seconds

    if (path >= 500){
        let delay = Math.floor(path / 500);
        time += delay * 60;
    }

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.round(time - hours * 3600 - minutes * 60);

    if (hours < 10){
        hours = '0' + hours;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);