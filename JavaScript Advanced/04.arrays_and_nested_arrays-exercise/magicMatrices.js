function magicMatrices(arr) {
    let isMagical = true;
    let firstRowSum = arr[0].reduce((acc, value) => acc + value, 0);

    for (let row of arr){ //checking rows sum
        let rowSum = row.reduce((acc, value) => acc + value, 0);

        if (rowSum != firstRowSum){
            isMagical = false;
        } 
    }

    for (let i=0; i<arr[0].length; i++){ //checking columns sum
        let colSum = 0;

        for (let k=0; k<arr.length; k++){
            colSum += arr[k][i];
        }

        if (colSum != firstRowSum){
            isMagical = false;
        }
    }
    
    //console.log(isMagical);
    return isMagical;
}

magicMatrices(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
);
console.log('---');
magicMatrices(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
);
console.log('---');
magicMatrices(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
);