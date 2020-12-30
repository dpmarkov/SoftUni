function cinema(x,y,z){
    let type = x;
    let r = Number(y);
    let c = Number(z);
    let result = 0;

    if (type === "Premiere"){
        result = r * c * 12;
    } else if (type === "Normal"){
        result = r * c * 7.5;
    } else {
        result = r * c * 5;
    }

    console.log(result.toFixed(2) + " " + "leva");
}
//cinema("Normal","21","13");