function firstAndLastKNumbers (arr){
    let k = arr[0];

    let printLn1 = "";
    let printLn2 = "";

    for (let i=1; i<=k; i++){
        printLn1 += arr[i] + " ";
    }

    for (let j=arr.length-k; j<arr.length; j++){
        printLn2 += arr[j] + " ";
    }

    console.log(printLn1);
    console.log(printLn2);
}