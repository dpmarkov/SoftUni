function magicSum(arr, num){
    for (i=0; i<arr.length-1; i++){
        for (k=i+1; k<arr.length; k++){
            if (arr[i] + arr[k] ==  num){
                let pair = arr[i] + " " + arr[k];

                console.log(pair)
            }
        }     
    }
}