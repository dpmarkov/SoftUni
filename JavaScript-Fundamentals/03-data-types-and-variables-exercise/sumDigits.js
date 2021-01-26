function sumDigits(num){
    num = num.toString();
    let digits = num.length;
    let sum = 0;

    for(i=0; i<digits; i++){
        sum += Number(num[i]);
    }

    console.log(sum)
}