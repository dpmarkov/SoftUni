function reverseAnArrayOfNumbers (n, arr){
    let result = "";

    for (let i=n-1; i>=0; i--){
        result += arr[i] + " ";
    }

    console.log(result);
}