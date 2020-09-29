function sumEvenNumbers(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        let num = parseInt(arr[i]);
        if (num % 2 == 0){
            sum += num;
        }
    }
    console.log(sum); 
}