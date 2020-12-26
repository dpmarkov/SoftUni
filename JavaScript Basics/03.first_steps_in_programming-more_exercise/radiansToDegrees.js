function radiansToDegrees(x){
    let y = Number(x);
    let result = y * 180 / Math.PI; 
    console.log(result.toFixed(0));   
}
radiansToDegrees("0.5236");