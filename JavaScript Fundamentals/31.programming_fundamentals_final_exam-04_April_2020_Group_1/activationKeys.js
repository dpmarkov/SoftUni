function activationKeys(input) {
    let rawKey = input.shift();
    let command = input.shift().split('>>>');

    while (command[0] != 'Generate'){
        if (command[0] == 'Contains'){
            if (rawKey.includes(command[1])){
                console.log(`${rawKey} contains ${command[1]}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command[0] == 'Flip'){
            let index1 = Number(command[2]);
            let index2 = Number(command[3]);
            let substr = rawKey.substring(index1, index2);

            if (command[1] == 'Upper'){
                substr = substr.toLocaleUpperCase();
            } else { //lower
                substr = substr.toLocaleLowerCase();
            }

            rawKey = rawKey.substring(0, index1) + substr + rawKey.substring(index2);
            console.log(rawKey);
        } else { //slice
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            rawKey = rawKey.substring(0, index1) + rawKey.substring(index2);

            console.log(rawKey);
        }

        command = input.shift().split('>>>');
    }

    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
    ]      
)

console.log('---');

activationKeys(
    [
        '134softsf5ftuni2020rockz42',
        'Slice>>>3>>>7',
        'Contains>>>-rock',
        'Contains>>>-uni-',
        'Contains>>>-rocks',
        'Flip>>>Upper>>>2>>>8',
        'Flip>>>Lower>>>5>>>11',
        'Generate'
    ]      
)