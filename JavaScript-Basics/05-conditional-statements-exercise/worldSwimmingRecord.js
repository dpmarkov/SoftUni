function worldSwimmingRecord(a, b, c){
    let worldRecord = Number(a); //20s
    let length = Number(b); //45m
    let secFor1Meter = Number(c); //1m for 2s

    let slow = 0;
    if (length >= 15){
        slow = Math.floor(length/15)
    }
    let ivanTime = length * secFor1Meter + slow * 12.5;

    if (ivanTime < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanTime-worldRecord).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord ("10464", "1500", "20");