function diagonalAttack(arr){
    let diag1 = 0;
    let diag2 = 0;
    let diagsIndexes = [];
    let d = arr.length;

    for (let i=0; i<d; i++){ //array in array conversion
        arr[i] = arr[i].split(' ');
    }

    for (i=0, k=d-1; i<d; i++, k--){
        diag1 += Number(arr[i][i]);
        diag2 += Number(arr[i][k]);

        if (!diagsIndexes.includes(i + ' ' + i)){
            diagsIndexes.push(i + ' ' + i);
        }
        
        if (!diagsIndexes.includes(i + ' ' + k)){
            diagsIndexes.push(i + ' ' + k);
        }
    }

    if (diag1 == diag2){
        for (let i=0; i<d; i++){
            for (let k=0; k<d; k++){
                let pair = i + ' ' + k;
                if (!diagsIndexes.includes(pair)){
                    arr[i][k] = diag1;
                }
            }
        }
    }

    for (let i=0; i<arr.length; i++){ //printing result
        console.log(arr[i].join(' '));
    }
}