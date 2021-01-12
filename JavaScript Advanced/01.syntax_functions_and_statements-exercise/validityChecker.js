function validityChecker(x1, y1, x2, y2) {
    let distance1 = Math.sqrt(Math.pow(Math.abs(x1), 2) + Math.pow(Math.abs(y1), 2));
    let distance2 = Math.sqrt(Math.pow(Math.abs(x2), 2) + Math.pow(Math.abs(y2), 2));
    let distance3 = Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));

    if (distance1 == Math.trunc(distance1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`); 
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`); 
    }

    if (distance2 == Math.trunc(distance2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`); 
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`); 
    }

    if (distance3 == Math.trunc(distance3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`); 
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); 
    }
}

validityChecker(3, 0, 0, 4)
console.log('---');
validityChecker(2, 1, 1, 1)