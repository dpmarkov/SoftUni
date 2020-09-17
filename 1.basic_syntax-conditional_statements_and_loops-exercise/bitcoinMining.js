function bitcoinMining(input){
    let days = input.length;    
    let bitcoins = 0;
    let leftMoney = 0;
    let totalMoney = 0;
    let goldForDay;
    let moneyForDay;
    let dayFirstBitcoin = 0;

    for (i=1; i<=days; i++){
        goldForDay = Number(input[i-1]);
        if (i % 3 == 0){
            moneyForDay = goldForDay * 0.7 * 67.51;
        } else {
            moneyForDay = goldForDay * 67.51;
        }
        totalMoney += moneyForDay;

        if (totalMoney >= 11949.16 & dayFirstBitcoin == 0){
            dayFirstBitcoin = i;
        }
    }

    bitcoins = Math.floor(totalMoney / 11949.16);
    leftMoney = totalMoney - bitcoins * 11949.16;

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayFirstBitcoin != 0){
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
}