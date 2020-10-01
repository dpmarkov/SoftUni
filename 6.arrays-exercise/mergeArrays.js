function mergeArrays(arr1, arr2){
    let arr3 = [];
    let value;
    for (i=0; i<arr1.length; i++){
        if (i%2==0){
            value = Number(arr1[i]) + Number(arr2[i]);
        } else {
            value = arr1[i] + "" + arr2[i]
        }

        arr3.push(value);
    }

    console.log(arr3.join(' - '));
}