function primeNumberChecker(num){
    let isPrime = true;

    for(i=2; i<num; i++){
        if (num % i == 0){
            isPrime = false;
        }
    }

    if (isPrime){
        console.log("true")
    } else {
        console.log("false");
    }
}