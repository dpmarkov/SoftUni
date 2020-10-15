function lastKNumbersSequence (n, k){
    let arr = [1];

    for (i=1; i<n; i++){
        let sum = 0;
        for (z=i-1; z>i-1-k; z--){
            if (z < 0){
                break;
            }

            sum += arr[z];
        }
        
        arr.push(sum);
    }

    console.log(arr.join(' '));
}