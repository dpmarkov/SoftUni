function fishTank(a,b,c,d){
    let l = Number(a);
    let w = Number(b);
    let h = Number(c);
    let procentage = Number(d)/100;

    let size = l * w * h;
    let totalWater = size / 1000;
    let result = totalWater - totalWater * procentage;
    console.log(result.toFixed(3));
}
fishTank("85","75","47","17");