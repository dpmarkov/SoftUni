function problem1(input) {
    let text = input.shift();
    let command = input.shift().split(' ');

    while (command[0] != 'Done'){
        if (command[0] == 'Change'){
            let [, find, substitute] = command;
            let index = text.indexOf(find);

            while (index != -1){
                text = text.replace(find, substitute);
                index = text.indexOf(find);
            }

            console.log(text);
        } else if (command[0] == 'Includes'){
            if (text.includes(command[1])){
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command[0] == 'End'){
            if (command[1] == text.slice(-command[1].length)){
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command[0] == 'Uppercase'){
            text = text.toLocaleUpperCase();
            console.log(text);
        } else if (command[0] == 'FindIndex'){
            console.log(text.indexOf(command[1]));
        } else { //Cut
            let start = Number(command[1]);
            let end = start + Number(command[2]);
            text = text.substring(start, end);

            console.log(text);
        }

        command = input.shift().split(' ');
    }
}

problem1(
    [
        '//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done'
    ]
)