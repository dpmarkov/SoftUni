function spiralMatrix(a, b){
    let arr = [];
    let num = 1;
    let size = a * b;
    let startCol = 0;
    let startRow = 0;
    let endRow = b - 1;
    let endCol = a - 1;

    for (i=0; i<b; i++){ //creating empty a x b array
        arr[i] = [];
    }

    while(num <= size){
        for (i=startCol; i<=endCol; i++){ //left to right
            arr[startRow][i] = num;
            num++;
        }

        startRow++

        for (i=startRow; i<=endRow; i++){ //top to bottom
            arr[i][endCol] = num;
            num++;
        }

        endCol--;

        for (i=endCol; i>=startCol; i--){ //right to left
            arr[endRow][i] = num;
            num++;
        }

        endRow--;

        for (i=endRow; i>=startRow; i--){ //bottom to top
            arr[i][startCol] = num;
            num++;
        }

        startCol++
    }
    
    for (i=0; i<b; i++){
        console.log(arr[i].join(' '));
        
    }
}