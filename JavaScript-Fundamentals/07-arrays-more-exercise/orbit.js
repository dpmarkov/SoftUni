function orbit(input){
    let rows = input[0];
    let cols = input[1];
    let rowStar = input[2];
    let colStar = input[3];
    let arr = [];

    for (i=0; i<rows; i++){
        arr[i] = [];
    }

    for (let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            arr[row][col] = Math.max(Math.abs(row-rowStar), Math.abs(col-colStar)) + 1;
        }
    }

    for (i=0; i<rows; i++){
        console.log(arr[i].join(' ')); 
    }
}