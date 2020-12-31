function cleverLily(a,b,c){
    let liliAge = Number(a);
    let washingMachine = Number(b);
    let singleToyPrice = Number(c);

    let toysCount = 0;
    let savedMoney = 0;
    let lastMoneyGift = 0;

    for (let year=1; year<=liliAge; year++){
        if(year%2 !== 0){
            toysCount++;
        } else {
            savedMoney += lastMoneyGift + 9;
            lastMoneyGift += 10;
        }
    }

    let savedMoneyFromToys = toysCount * singleToyPrice;
    let totalSavedMoney = savedMoney + savedMoneyFromToys;

    if(totalSavedMoney >= washingMachine){
        let leftMoney = (totalSavedMoney - washingMachine).toFixed(2);
        console.log(`Yes! ${leftMoney}`);
    } else {
        let neededMoney = (washingMachine - totalSavedMoney).toFixed(2);
        console.log(`No! ${neededMoney}`);
    }
}

cleverLili("21", "1570.98", "3");