function perfectNumber(num){
    divisors = [];
    let sum = 0;

    for (let i=1; i<num; i++){
        if(num % i == 0){
            divisors.push(i);
        }
    }

    for (let k=0; k<divisors.length; k++){
        sum += divisors[k];
    }

    if (sum == num){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}