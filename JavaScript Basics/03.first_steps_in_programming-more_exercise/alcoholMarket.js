function alcoholMarket(a,b,c,d,e){
    let price = Number(a);
    let x = Number(b);
    let y = Number(c);
    let z = Number(d);
    let k = Number(e);

    let kSum = k * price;
    let zSum = z * (price - price * 50 / 100);
    let ySum = y * ((price - price * 50 / 100) - (price - price * 50 / 100)* 40 / 100);
    let xSum = x * ((price - price * 50 / 100) - (price - price * 50 / 100)* 80 / 100);
    let result = kSum + zSum + ySum + xSum;

    console.log(result.toFixed(2));
}
 alcoholMarket("50", "10", "3.5", "6.5", "1");