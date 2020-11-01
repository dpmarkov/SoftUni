function memoryGame (input){
    let sequence = input.shift().split(' ');
    let indexes = input.shift().split(' ');
    let moves = 0;

    while (indexes[0] != "end"){
        moves++;
        let index1 = Number(indexes.shift());
        let index2 = Number(indexes.shift());

        if (index1 == index2 || index1 >= sequence.length || index1 < 0 || index2 >= sequence.length || index2 < 0){
            console.log("Invalid input! Adding additional elements to the board");
            let elemToAdd = `-${moves}a`
            sequence.splice(sequence.length/2, 0, elemToAdd, elemToAdd)
        } else if (sequence[index1] == sequence[index2]){
            let removedEl = "";
            if (index1 < index2){
                removedEl = sequence.splice(index1, 1);
                sequence.splice(index2-1, 1);
            } else {
                removedEl = sequence.splice(index2, 1);
                sequence.splice(index1-1, 1);
            }
            
            console.log(`Congrats! You have found matching elements - ${removedEl}!`);
        } else {
            console.log("Try again!");
        }
        
        if (sequence.length == 0){
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        indexes = input.shift().split(' ');
    }

    console.log("Sorry you lose :(");
    console.log(sequence.join(' '));
}

memoryGame(
    [
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ]              
)