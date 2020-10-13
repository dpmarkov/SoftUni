function cone(r, h){
    let volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    let area = Math.PI * r  * (r + Math.sqrt(r * r + h * h));

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + area.toFixed(4));
}