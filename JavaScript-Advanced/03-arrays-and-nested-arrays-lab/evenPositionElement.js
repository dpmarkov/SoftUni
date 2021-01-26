function evenPositionElement(arr){
    let resultArr = [];

    for (let i=0; i<arr.length; i+=2){
        resultArr.push(arr[i]);
    }

    console.log(resultArr.join(' ')); 
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);
