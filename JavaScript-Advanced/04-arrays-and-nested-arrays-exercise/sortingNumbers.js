function sortingNumbers(arr){
    let result = []

    arr.sort((a, b) => a-b);

    for (let i=0, k = arr.length-1; i<arr.length/2 && k >= arr.length/2; i++, k--){
        result.push(arr[i]);
        result.push(arr[k]);
    }

    if (arr.length % 2 != 0){
        //adding the missing element when array contains uneven numbers
        result.push(arr[Math.ceil(arr.length/2-1)]);
    }
    
    return result;
}

sortingNumbers(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
);
console.log('---');
sortingNumbers([3, -6, 9, 12, -89, -88, 33]);
