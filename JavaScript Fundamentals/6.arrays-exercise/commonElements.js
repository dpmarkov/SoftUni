function commonElements(arr1, arr2){
    for (let value of arr1){
        if (arr2.includes(value)){
            console.log(value); 
        }
    }
}