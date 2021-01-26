function newHouse (a,b,c){
    let flowers = a;
    let quantity = Number(b);
    let budget = Number(c);
    let price = 0;

    if (flowers === "Roses"){
        price = quantity * 5;
        if (quantity > 80){
            price = price * 0.9;
        }
    } else if (flowers === "Dahlias"){
        price = quantity * 3.8;
        if (quantity > 90){
            price = price * 0.85;
        }
    } else if (flowers === "Tulips"){
        price = quantity * 2.8;
        if (quantity > 80){
            price = price * 0.85;
        }
    } else if (flowers === "Narcissus"){
        price = quantity * 3;
        if (quantity < 120){
            price = price * 1.15;
        }
    } else{
        price = quantity * 2.5;
        if (quantity < 80){
            price = price * 1.2;
        }
    }

    if (budget >= price){
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`)
    }
}