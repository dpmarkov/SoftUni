function accountBalance(input){
    let index = 0;
    let transactionCount = Number(input[index]);
    index++;
    let currentTransactionCount = 0;
    let total = 0;
    while (currentTransactionCount < transactionCount){
        currentTransactionCount++;
        let money = Number(input[index]);
        index++;
        if (money < 0){
            console.log("Invalid operation!")
            break;
        }
        console.log("Increase: " + money.toFixed(2));
        total += money;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}