function rounding(num, precision){
    if (precision > 15){
        precision = 15;
    }

    let result = num.toFixed(precision);
    result = parseFloat(result);
    console.log(result);
}