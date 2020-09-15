function division(num){
    let divider;

    if (num % 10 == 0){
        divider = 10;
    } else if (num % 7 == 0){
        divider = 7;
    } else if (num % 6 == 0){
        divider = 6;
    } else if (num % 3 == 0){
        divider = 3;
    } else if (num % 2 == 0){
        divider = 2;
    } else {
        divider = "none"
    }

    if (divider != "none"){
        console.log(`The number is divisible by ${divider}`);
    } else {
        console.log("Not divisible");
    }
}