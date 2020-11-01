function theLift (input){
    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let i=0;

    while (people > 0 && i < wagons.length){
        let currentWagon = wagons[i];
        let freeSpots = 4 - currentWagon;

        if (freeSpots > 0){
            if (freeSpots <= people){
                wagons[i] = 4;
                people -= freeSpots;
            } else {
                wagons[i] += people; 
                people = 0;
            }
        }

        i++;
    }

    if (people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
    } else if (wagons[wagons.length-1] < 4){
        console.log("The lift has empty spots!");
    }

    console.log(wagons.join(' '));
}

theLift(
    [
        "15",
        "0 0 0 1"
    ]    
)