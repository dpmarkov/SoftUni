function addAndSubtract(arr){
    let sum1 = 0;
    let sum2 = 0;

    for(k=0; k<arr.length; k++){
        sum1 += arr[k];
    }

    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    for(m=0; m<arr.length; m++){
        sum2 += arr[m];
    }

    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}