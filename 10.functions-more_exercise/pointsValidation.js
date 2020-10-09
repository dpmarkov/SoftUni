function pointsValidation(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let valid1 = true;
    let valid2 = true;
    let valid3 = true;

    //valid1..................................
        let z1 = Math.sqrt(Math.abs(x1) * Math.abs(x1) + Math.abs(y1) * Math.abs(y1));
        if(z1 % 1 != 0){
            valid1 = false;
        }
    //..................................valid1

    //valid2..................................
        let z2 = Math.sqrt(Math.abs(x2)*Math.abs(x2) + Math.abs(y2)*Math.abs(y2));
        if(z2 % 1 != 0){
            valid2 = false;
        }
    //..................................valid2

    //valid3..................................
        let z3 = Math.hypot(x2-x1, y2-y1)
        if(z3 % 1 != 0){
            valid3 = false;
        }
    //..................................valid3

    if (valid1){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);  
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (valid2){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);  
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (valid3){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);  
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}