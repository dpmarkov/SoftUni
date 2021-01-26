function nondecreasingSubsequence(arr){
    let previousNum = arr[0];
    let arrResult = [previousNum];

    for (i=1; i<arr.length; i++){
        if (arr[i] >= previousNum){
            previousNum = arr[i];
            arrResult.push(previousNum);
        }
    }

    console.log(arrResult.join(' '));
}