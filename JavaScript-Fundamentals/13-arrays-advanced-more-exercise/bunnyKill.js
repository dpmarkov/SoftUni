function bunnyKill(arr){
    let bombsCords = arr.pop().split(' '); //bombs coordinates
    let bombs = bombsCords.length; //bombs number
    let snowballKills = 0;
    let snowballDmg = 0;

    for (i=0; i<arr.length; i++){
        arr[i] = arr[i].split(' ').map(Number);
    }

    let rows = arr.length;
    let cols = arr[0].length;
    
    for (let bomb = 0; bomb < bombs; bomb++){
        let bombCordsXY = bombsCords[bomb].split(',').map(Number);
        let bombRow = bombCordsXY[0];
        let bombCol = bombCordsXY[1];
        let bombDmg = arr[bombRow][bombCol];
        
        if (bombDmg > 0){//bunny with bomb is alive
            if (bombCol - 1 >= 0){
                arr[bombRow][bombCol-1] -= bombDmg;
                if (bombRow-1 >= 0){
                    arr[bombRow-1][bombCol-1] -= bombDmg;
                }
                if (bombRow+1 < rows){
                    arr[bombRow+1][bombCol-1] -= bombDmg;
                }
            }

            if (bombCol + 1 < cols){
                arr[bombRow][bombCol+1] -= bombDmg;
                if (bombRow-1 >= 0){
                    arr[bombRow-1][bombCol+1] -= bombDmg;
                }
                if (bombRow+1 < rows){
                    arr[bombRow+1][bombCol+1] -= bombDmg;
                }
            }

            if (bombRow - 1 >= 0){
                arr[bombRow-1][bombCol] -= bombDmg;
            }
            if (bombRow + 1 < rows){
                arr[bombRow+1][bombCol] -= bombDmg;
            }

            snowballDmg += bombDmg;
            arr[bombRow][bombCol] = 0 //removing bunny with bomb
            snowballKills++;
        }
    }
    
    for (let row=0; row < rows; row++){
        for (let col=0; col < cols; col++){
            if (arr[row][col] > 0){
                snowballDmg += arr[row][col];
                snowballKills++
            }
        }
    }

    console.log(snowballDmg);
    console.log(snowballKills);
}