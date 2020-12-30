function fishingBoat(a,b,c){
    let budget = Number(a);
    let season = b;
    let fishers = Number(c);
    let price = 0;

    if (season === "Spring"){
        price = 3000;
        if (fishers <= 6){
            price = price * 0.9;
        } else if (fishers <= 11){
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
        if (fishers % 2 == 0){
            price = price * 0.95;
        }
    } else if (season === "Summer"){
        price = 4200;
        if (fishers <= 6){
            price = price * 0.9;
        } else if (fishers <= 11){
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
        if (fishers % 2 == 0){
            price = price * 0.95;
        }
    } else if (season === "Autumn"){
        price = 4200;
        if (fishers <= 6){
            price = price * 0.9;
        } else if (fishers <= 11){
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
    } else {
        price = 2600;
        if (fishers <= 6){
            price = price * 0.9;
        } else if (fishers <= 11){
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
        if (fishers % 2 == 0){ //remove from Autumn
            price = price * 0.95;
        }
    }

    if (budget >= price){
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
    }
}