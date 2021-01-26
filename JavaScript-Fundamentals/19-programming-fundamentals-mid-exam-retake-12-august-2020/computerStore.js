function computerStore (input){
    let command = input.shift();
    let sum = 0; //no taxes
    let taxes = 0;

    while (command != "special" && command != "regular"){
        let price = Number(command);

        if (price > 0){
            sum += price;
            taxes += price * 0.2;
        } else {
            console.log("Invalid price!");
        }
        
        command = input.shift();
    }
    
    let total = sum + taxes;

    if (command == "special"){
        total = total * 0.9;
    }

    if (sum + taxes == 0){
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${total.toFixed(2)}$`);        
    }
}

computerStore(
    [
        '1050', 
        '200', 
        '450',
        '2', 
        '18.50', 
        '16.86', 
        'special'
    ]    
)

computerStore(
    [
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30',
        'regular'
    ]
)