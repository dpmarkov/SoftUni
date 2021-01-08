function changeBureau(input){
    let bitcoins = Number(input[0]);
    let uan = Number(input[1]);
    let commission = Number(input[2]);
    let result = 0;

    result = (bitcoins * 1168 / 1.95) + (uan * 0.15 * 1.76 / 1.95);
    result = result * (100 - commission) / 100;
    console.log(result.toFixed(2));
}
//changeBureau([ '1', '5', '5', '' ]);