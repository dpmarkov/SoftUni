function ticTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';

    for (let move of moves){
        let [i, k] = move.split(' ');

        if (!checkForFreeSpace()){ //no free space
            break;
        }

        if (dashboard[i][k] != false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[i][k] = player;

        if (checkIfPlayerWin(player)){ //someone won
            console.log(`Player ${player} wins!`);
            printBoard();
            return;
        }

        if (player == 'O'){
            player = 'X';
        } else {
            player = 'O';
        }
    }

    console.log('The game ended! Nobody wins :(');
    printBoard();

    function checkIfPlayerWin(player){
        for (let i=0; i<3; i++){
            let hMatch = true;
            let vMatch = true;

            for (let k=0; k<3; k++){
                if (dashboard[i][k] != player){ //check for horizontal match
                    hMatch = false;
                }

                if (dashboard[k][i] != player){ //check for vertical match
                    vMatch = false;
                }
            }

            if (hMatch){
                return true;
            }
            if (vMatch){
                return true;
            }
        }

        if ((dashboard[0][0] == player && dashboard[1][1] == player && dashboard[2][2] == player) ||
        (dashboard[0][2] == player && dashboard[1][1] == player && dashboard[2][0] == player)){ //check for diagonal match
            return true;
        }

        return false;
    }

    function printBoard(){
        for (let row of dashboard){
            console.log(row.join('\t'));
        }
    }

    function checkForFreeSpace(){
        for (let row of dashboard){
            for (let item of row){
                if (item == false){
                    return true;
                }
            }
        }

        return false;
    }
}

ticTacToe(
    [
        "0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"
    ]
);
console.log('---');
ticTacToe(
    [
        "0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"
    ]
);
console.log('---');
ticTacToe(
    [
        "0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"
    ]
);