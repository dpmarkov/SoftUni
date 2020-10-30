function shootForTheWin(input){
    let shotTargets = 0;
    let targets = input.shift().split(' ').map(Number);
    let index = input.shift();

    while(index != 'End'){
        index = Number(index);
        if (targets[index] != -1 && index >= 0 && index < targets.length){
            let diff = targets[index];
            targets[index] = -1;
            shotTargets++;

            for (let i=0; i<targets.length; i++){
                if (targets[i]>diff && targets[i] > -1){
                    targets[i] -= diff;
                } else if (targets[i]<=diff && targets[i] > -1){
                    targets[i] += diff;
                }
            }
        }

        index = input.shift();
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

shootForTheWin(
    [ '24 50 36 70', '0', '4', '3', '1', 'End' ]
)
console.log('-----------------------------------------------------');
shootForTheWin(
    [ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
)
console.log('-----------------------------------------------------');
shootForTheWin(
    [ '30', '4', '2', '4', '1', 'End' ]
)