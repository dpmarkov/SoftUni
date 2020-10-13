function evenAndOddSubtraction(arr){
    let sumE = 0;
    let sumO = 0;

    for (let i=0; i<arr.length; i++){
        let num = parseInt(arr[i]);
        if (num % 2 == 0){
            sumE += num;
        } else {
            sumO += num;
        }
    }

    let diff = sumE - sumO;

    console.log(diff); 
}
