function metricConverter2(a, b, c) {
    let num = Number(a);
    let input = b;
    let output = c;

    if (input === "mm") {
        if (output === "cm"){
            num = num / 10;
        } else {
            num = num / 1000;
        }
    } else if (input === "cm"){
        if (output === "m"){
            num = num / 100;
        } else {
            num = num * 10;
        }
    } else {
        if (output === "cm"){
            num = num * 100;
        } else {
            num = num * 1000;
        } 
    }
    console.log(num.toFixed(3));
}
metricConverter2("12", "mm", "m");