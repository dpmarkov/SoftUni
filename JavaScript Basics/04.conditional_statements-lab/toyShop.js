function toyShop(a, b, c, d, e, f){
    let holiday = Number(a);
    let puzzles = Number(b);
    let dolls = Number(c);
    let teddies = Number(d);
    let minion = Number(e);
    let trucks = Number(f);
    let toyNumber = puzzles + dolls + teddies + minion + trucks;
    let soldAll = puzzles*2.6 + dolls*3 + teddies*4.1 + minion*8.2 + trucks*2;
    if (toyNumber >= 50){
        soldAll = soldAll*75/100;
    }
    soldAll = soldAll*90/100;
    if (soldAll >= holiday){
        let xMoney = (soldAll - holiday).toFixed(2);
        console.log("Yes! "+xMoney+" lv left.");
    }
    if (soldAll < holiday){
        let xMoney = (holiday - soldAll).toFixed(2);
        console.log("Not enough money! "+xMoney+" lv needed.");
    }
}
toyShop(320,8,2,5,5,1);