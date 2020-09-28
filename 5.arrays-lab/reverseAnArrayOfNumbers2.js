function reverseAnArrayOfNumbers2(n, arr){
    let newArr = new Array();

    for(i=0; i<n; i++){
        newArr.push(arr[i])
    }
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}