function cake(input){
    let cakeSize = Number(input[0]) * Number(input[1]);
    let piecesTaken = 0;
    let index = 2;
    
    while (input[index] != undefined && input[index] != "STOP"){
        piecesTaken += Number(input[index]);
        index++;
    }

    if (piecesTaken <= cakeSize){
        console.log(`${cakeSize-piecesTaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${piecesTaken-cakeSize} pieces more.`)
    }
}