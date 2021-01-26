function equalNeighbors(arr){
    let pairs = 0;

    for (let row = 0; row<arr.length; row++){
        for (let col = 0; col<arr[0].length; col++){
            if (row + 1 < arr.length){
                if (arr[row][col] == arr[row+1][col]){
                    pairs++
                }
            }
            if (col + 1 < arr[0].length){
                if (arr[row][col] == arr[row][col+1]){
                    pairs++
                }
            }
        }
    }
    
    console.log(pairs);
}