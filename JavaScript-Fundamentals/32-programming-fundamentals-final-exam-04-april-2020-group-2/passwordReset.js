function passwordReset(input) {
    let password = input.shift();
    let command = input.shift().split(' ');

    while (command[0] != 'Done'){
        if (command[0] == 'TakeOdd'){
            let newPassword = '';

            for (i=0; i<password.length; i++){
                if (i % 2 != 0){
                    newPassword += password[i];
                }
            }

            password = newPassword;

            console.log(password);
        } else if (command[0] == 'Cut'){
            let index = Number(command[1]);
            let length = Number(command[2]);

            password = password.substring(0, index) + password.substring(index + length);
            console.log(password);
        } else { //Substitute
            let [,find, substitute] = command;
            let index = password.indexOf(find);

            if (index != -1) {
                while (index != -1){
                    password = password.replace(find, substitute);
                    index = password.indexOf(find);
                }

                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }

        command = input.shift().split(' ');
    }

    console.log(`Your password is: ${password}`);
}

passwordReset(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
)

console.log('---');

passwordReset(
    [
        'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
        'TakeOdd',
        'Cut 18 2',
        'Substitute ! ***',
        'Substitute ? .!.',
        'Done'
    ] 
)