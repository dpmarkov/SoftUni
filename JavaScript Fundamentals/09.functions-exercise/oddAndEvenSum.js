function oddAndEvenSum(num){
    let evens = odds = 0;
    num += '';

    for(i=0; i<num.length; i++){
        if (num[i] % 2 == 0){
            evens += Number(num[i]);
        } else {
            odds += Number(num[i]);
        }
    }
    console.log(`Odd sum = ${odds}, Even sum = ${evens}`)
}