function nxnMatrix(n){
    let matrix = [];

    for (i=0; i<n; i++){
        matrix[i] = []

        for (k=0; k<n; k++){
            matrix[i][k] = n;
        }

        console.log(matrix[i].join(' '));
        
    }
}