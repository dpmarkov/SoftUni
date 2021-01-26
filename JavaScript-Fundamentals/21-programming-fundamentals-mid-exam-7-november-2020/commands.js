function commands (input){
    let arr = input.shift();
    let command = input.shift().split(' ');
    
    while (command[0] != "end"){
        if (command[0] == "reverse"){
            let index = Number(command[2]);
            let count = Number(command[4]);
            let revArr = arr.splice(index, count).reverse();
            let secondHalf = arr.splice(index);
            arr = arr.concat(revArr, secondHalf); 
        } else if (command[0] == "sort"){
            let index = Number(command[2]);
            let count = Number(command[4]);
            let sortArr = arr.splice(index, count).sort();
            let secondHalf = arr.splice(index);
            arr = arr.concat(sortArr, secondHalf); 
        } else { //remove
            let count = Number(command[1]);
            arr = arr.splice(count);
        }

        command = input.shift().split(' ');
    }

    console.log(arr.join(', '));
}

commands(
    [["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
    "reverse from 2 count 4",
    "end"]
)

commands(
    [["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
    "sort from 2 count 4",
    "end"]
)

commands(
    [["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
    "remove 2",
    "end"]
)