function counterStrike(arr){
    let wonBattles = 0;
    let energy = Number(arr.shift())

    let distance = arr.shift()
    while (distance != "End of battle" && energy > 0){
        distance = Number(distance);

        if (distance <= energy){
            wonBattles++;
            energy -= distance;
            distance = arr.shift()
        } else {
            return console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
        }

        if (wonBattles % 3 == 0){
            energy += wonBattles;
        }
    }

    if (distance == "End of battle"){
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    } else if (energy <= 0){
        console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
    }
}

counterStrike(
    [
        '100', '10', '10',
        '10',  '1',  '2',
        '3',   '73', '10'
      ]
)

counterStrike(
    [ '200', '54', '14', '28', '13', 'End of battle' ]
)