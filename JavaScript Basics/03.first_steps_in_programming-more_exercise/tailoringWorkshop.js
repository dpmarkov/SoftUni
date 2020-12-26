function tailoringWorkshop(x, y, z){
    let tables = Number(x);
    let sideA = Number(y);
    let sideB = Number(z);

    let areaSmall = tables * sideA/2 * sideA/2;
    let areaLarge = tables * ((sideA + 0.3*2) * (sideB + 0.3*2));
    let priceUsd = areaLarge * 7 + areaSmall * 9;
    let priceBgn = priceUsd * 1.85;

    console.log(priceUsd.toFixed(2) + ' USD');
    console.log(priceBgn.toFixed(2) + ' BGN');
}
tailoringWorkshop("5", "1.0", "0.5");