function maxNumber(arr){
    let arr3 = [];
    for (i=0; i<arr.length; i++){
        let current = arr[i];
        let topInteger = true;

        for (k=i+1; k<arr.length; k++){
            let next = arr[k];
            if (current <= next){
                topInteger = false;
            }
        }

        if (topInteger){
            arr3.push(current);
        }
    }

    console.log(arr3.join(' '));
}
