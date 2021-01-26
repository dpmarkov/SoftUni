function vacation(inputData) {
    let vacationExpenses = Number(inputData[0]);
    let amount = Number(inputData[1]);
 
    let index = 2;
    let days = 0;
    let spendMoneyDays = 0;
 
    let currentAction = inputData[index];
    let currentAmount = Number(inputData[index + 1]);
 
    while ((currentAction !== undefined) && (spendMoneyDays < 5)) {
 
        if (currentAction === 'spend') {
            amount = Math.max((amount - currentAmount), 0);
            spendMoneyDays++;
        } else if (currentAction === 'save') {
            amount += currentAmount;
            spendMoneyDays = 0;
        }
 
        index += 2;
        days++;
 
        currentAction = inputData[index];
        currentAmount = Number(inputData[index + 1]);
    }
 
    if (spendMoneyDays >= 5) {
        console.log("You can't save the money.");
        console.log(`${days}`);
 
    } else if (amount >= vacationExpenses) {
 
        console.log(`You saved the money for ${days} days.`);
    }
}