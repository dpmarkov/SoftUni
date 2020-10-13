function negativePositiveNumbers (arr){
    let arr2 = [];

    for (i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr2.unshift(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }

    for (let value of arr2){
        console.log(value);
    }
}