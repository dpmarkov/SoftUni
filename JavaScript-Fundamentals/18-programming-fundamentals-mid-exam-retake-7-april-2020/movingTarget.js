function movingTarget(input){
    let targets = input.shift().split(' ').map(Number);
    let command = input.shift().split(' ');
    
    while(command[0] != 'End'){
        if (command[0] == 'Shoot'){
            let index = Number(command[1]);
            let power = Number(command[2]);

            if (index >= 0 && index < targets.length){//valid index check
                targets[index] -= power;

                if (targets[index] <= 0){ //removing target if shot
                    targets.splice(index, 1);
                }
            }
        } else if (command[0] == 'Add'){
            let index = Number(command[1]);
            let value = Number(command[2]);

            if (index >= 0 && index < targets.length){//valid index check
                targets.splice(index, 0, value)
            } else {
                console.log("Invalid placement!");
            }
        } else { //Strike
            let index = Number(command[1]);
            let radius = Number(command[2]); //returns NaN if it doesn't have radius

            if (radius != NaN && index-radius >= 0 && index+radius < targets.length){//valid index check
                targets.splice(index-radius, (radius*2+1))
            } else if (radius == NaN && index >= 0 && index < targets.length) {
                targets.splice(index, 1)
            } else {
                console.log("Strike missed!");
            }
        }

        command = input.shift().split(' ');
    }

    console.log(targets.join('|'));
}

movingTarget(
    [
        '52 74 23 44 96 110',
        'Shoot 5 10',
        'Shoot 1 80',
        'Strike 2 1',
        'Add 22 3',
        'End'
    ]
)

console.log("---------------------------");

movingTarget(
    [
        '47 55 85 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
    ]
)

