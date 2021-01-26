function distanceBetweenPoints(x1, y1, x2, y2){
    let a = Math.abs(x2 - x1);
    let b = Math.abs(y1 - y2);
    let c = Math.sqrt(a*a + b*b);

    console.log(c);
}