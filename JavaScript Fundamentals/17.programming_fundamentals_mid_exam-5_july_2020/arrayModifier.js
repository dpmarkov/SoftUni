function arrayModifier(input){
    let arr = input.shift().split(' ').map(Number);
    let command = input.shift().split(' ');

    while (command != 'end'){
        if (command[0] == 'swap'){
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let temp = arr[index1];

            arr[index1] = arr[index2];
            arr[index2] = temp;
        } else if (command[0] == 'multiply'){
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            arr[index1] *= arr[index2];
        } else { //decrease
            arr = arr.map(x => x - 1);
        }

        command = input.shift().split(' ');
    }
    
    console.log(arr.join(', '));
}

arrayModifier(
    [
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
      ]
)

