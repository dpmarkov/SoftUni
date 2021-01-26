function godzillaVsKong(a,b,c){
    let budget = Number(a);
    let people = Number(b);
    let priceDress = Number(c);
    let priceForDress = people * priceDress;
    if (people > 150){
        priceForDress = priceForDress * 0.9;
    }
    
    budget = budget * 0.9; //za dekor

    if (budget < priceForDress){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(priceForDress - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - priceForDress).toFixed(2)} leva left.`);
    }
}
godzillaVsKong("20000", "120", "55.5");