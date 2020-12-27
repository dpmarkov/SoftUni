function timePlus15Min(a, b) {
    let hour = Number(a);
    let minutes = Number(b) + 15;

    if (minutes >= 60) {
        hour += 1;
        if (hour >= 24){
            hour = 0
        }
        minutes -= 60;
    }
    if (minutes <= 9){
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}
timePlus15Min("23", "59");