function greatestCommonDivisor(a, b) {
    if (a == b){
        console.log(a);
    } else {
        let smallerN = Math.min(a, b);
        let biggerN = Math.max(a, b);
        let result;

        for (i = 1; i <= smallerN; i++){
            if (smallerN % i == 0 && biggerN % i == 0){
                result = i;
            }
        }

        console.log(result); 
    }
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
greatestCommonDivisor(11, 121);