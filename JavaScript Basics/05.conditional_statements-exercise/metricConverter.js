function metricConverter(a, b, c) {
    let num = Number(a);
    let input = b;
    let output = c;

    if (input === "mm" && output === "cm"){
        num = num / 10;
    } else if (input === "mm" && output === "m"){
        num = num / 1000;
    } else if (input === "cm" && output === "mm"){
        num = num * 10;
    } else if (input === "cm" && output === "m"){
        num = num / 100;
    } else if (input === "m" && output === "cm"){
        num = num * 100;
    } else {
        num = num * 1000;
    }
    console.log(num.toFixed(3));
}
metricConverter("12", "mm", "m");