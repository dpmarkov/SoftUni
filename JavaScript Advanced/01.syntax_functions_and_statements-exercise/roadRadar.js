function roadRadar([speed, area]) {
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

    if (diff > 0 && diff <= 20){
        console.log('speeding');
    } else if (diff > 20 && diff <= 40){
        console.log('excessive speeding');
    } else if (diff > 40){
        console.log('reckless driving');
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential'])
roadRadar([120, 'interstate'])
roadRadar([200, 'motorway'])