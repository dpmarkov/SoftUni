function printNthElement(arr){
    let step = Number(arr.pop());
    let arr2 = []
    for (i=0; i<arr.length; i +=step){
        arr2.push(arr[i]);
    }

    console.log(arr2.join(' '));
    
}