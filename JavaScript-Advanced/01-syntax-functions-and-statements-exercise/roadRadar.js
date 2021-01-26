function roadRadar(speed, area) {
    let speedLimit;

    switch (area){
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    let diff = speed - speedLimit;
    let print;
    
    if (diff <= 0) {
        print = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        print = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit}`;
    }
    
    if (diff > 0 && diff <= 20){
        print += ' - speeding';
    } else if (diff > 20 && diff <= 40){
        print += ' - excessive speeding';
    } else if (diff > 40){
        print += ' - reckless driving';
    }

    console.log(print);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');