function gladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let shieldIsBroken = 0;

    for (i=1; i<=losts; i++){
        if (i % 2 == 0 & i % 3 == 0){
            expenses += helmetPrice + swordPrice + shieldPrice;
            shieldIsBroken++;
        } else if (i % 2 == 0){
            expenses += helmetPrice;
        } else if (i % 3 == 0){
            expenses += swordPrice;
        }

        if(shieldIsBroken == 2){
            expenses += armorPrice;
            shieldIsBroken = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}