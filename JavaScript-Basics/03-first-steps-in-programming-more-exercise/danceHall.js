function danceHall(x, y, z){
    let L = Number(x);
    let W = Number(y);
    let A = Number(z);

    let areaHall = L * W;
    let areaWardrobe = A * A;
    let areaUsable = areaHall - areaHall/10 - areaWardrobe;
    let result = Math.floor(areaUsable / 0.704);
    console.log(result);
}
danceHall("50", "25", "2");