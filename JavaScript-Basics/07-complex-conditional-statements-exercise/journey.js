function journey(a,b){
    let budget = Number(a);
    let season = b;
    let destination = "";
    let place = "";
    let price = 0;
    if (season === "summer"){
        place = "Camp";

        if (budget <= 100){
            destination = "Bulgaria";
            price = 0.3 * budget;
        } else if (budget <= 1000){
            destination = "Balkans";
            price = 0.4 * budget;
        } else {
            destination = "Europe";
            price = 0.9 * budget;
        }

        if (destination === "Europe"){
            place = "Hotel";
        }
    } else{
        place = "Hotel";

        if (budget <= 100){
            destination = "Bulgaria";
            price = 0.7 * budget;
        } else if (budget <= 1000){
            destination = "Balkans";
            price = 0.8 * budget;
        } else {
            destination = "Europe";
            price = 0.9 * budget;
        }
    }
    price = price.toFixed(2);
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price}`);
}