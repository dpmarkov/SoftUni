function twodRectangleArea(xx1, yy1, xx2, yy2){
    let x1 = Number(xx1);
    let y1 = Number(yy1);
    let x2 = Number(xx2);
    let y2 = Number(yy2);
    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y2 - y1);
    let area = sideA * sideB;
    let allSides = 2 * sideA + 2 * sideB;
    console.log(area.toFixed(2));
    console.log(allSides.toFixed(2));
}
twodRectangleArea("30", "40", "70", "-10");