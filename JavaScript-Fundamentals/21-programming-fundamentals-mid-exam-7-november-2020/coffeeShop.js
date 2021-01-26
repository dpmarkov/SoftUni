function coffeeShop (input){
    let orders = input.shift();
    let total = 0;

    for (i=0; i<orders*3; i=i+3){
        let pricePerCapsule = input[i];
        let days = input[i+1];
        let capsulesCount = input[i+2];
        let price = days * capsulesCount * pricePerCapsule;
        total += price;

        console.log(`The price for the coffee is: $${price.toFixed(2)}`);
    }

    console.log(`Total: $${total.toFixed(2)}`);
}

coffeeShop(
    [2,
    4.99,
    31,
    3,
    0.35,
    31,
    5]     
)

coffeeShop(
    [1,
    1.53,
    30,
    8]    
)

coffeeShop(
    [1,
    4,
    30,
    0]    
)