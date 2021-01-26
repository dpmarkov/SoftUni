function listOfProducts (arr){
    arr.sort();

    for (i=0; i<arr.length; i++){
        console.log(i+1 + "." + arr[i]);
    }
}