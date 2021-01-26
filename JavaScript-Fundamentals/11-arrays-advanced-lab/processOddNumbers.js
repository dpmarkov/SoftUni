function processOddNumbers (arr){
    let arr2 = []

    for (i=0; i<arr.length; i++){
        if (i % 2 != 0){
            arr2.unshift(arr[i] * 2);
        }
    }

    console.log(arr2.join(' '));
}