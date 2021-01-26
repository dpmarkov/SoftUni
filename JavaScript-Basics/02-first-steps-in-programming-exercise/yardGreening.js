function yardGreening(a){
    let sq = Number(a);
    let discount = sq * 7.61 * 18/100;
    discount = discount.toFixed(2);
    let sum = sq * 7.61 - discount;
    sum = sum.toFixed(2);
    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening("540");