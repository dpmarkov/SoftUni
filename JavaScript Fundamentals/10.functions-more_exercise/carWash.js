function carWash(arr){
    let value = 0;

    for (i=0; i<arr.length; i++){
        if (arr[i] == "soap"){
            value += 10;
        } else if (arr[i] == "water"){
            value += value * 0.2;
        } else if (arr[i] == "vacuum cleaner"){
            value += value * 0.25;
        } else {
            value -= value * 0.1;
            if (value < 0){
                value = 0;
            }
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`); 
}