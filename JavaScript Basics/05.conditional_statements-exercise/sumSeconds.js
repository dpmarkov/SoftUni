function sumSeconds(x, y, z){
    let a = Number(x);
    let b = Number(y);
    let c = Number(z);
    
    let total = a + b + c;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;

    if (seconds >= 10){
        console.log(`${minutes}:${seconds}`);
    } else {
        console.log(`${minutes}:0${seconds}`);
    }
}
sumSeconds("35","45","44");