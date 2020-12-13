function problem2(input) {
    let patternUser = /U\$(?<user>[A-Z][a-z]{2,})U\$/
    let patternPass = /P@\$(?<pass>[a-z]{5,}[0-9]+)P@\$/
    let count = Number(input.shift());
    let logIns = 0;

    for (i=0; i<count; i++){
        let tryInput = input[i];

        if (patternUser.test(tryInput) && patternPass.test(tryInput)){
            let user = tryInput.match(patternUser)['groups']['user'];
            let pass = tryInput.match(patternPass)['groups']['pass'];

            console.log('Registration was successful');
            console.log(`Username: ${user}, Password: ${pass}`);

            logIns++;
        } else {
            console.log('Invalid username or password');
        }
    }

    console.log(`Successful registrations: ${logIns}`);
}

problem2(
    [
        '3',
        'U$MichaelU$P@$asdqwe123P@$',
        'U$NameU$P@$PasswordP@$',
        'U$UserU$P@$ad2P@$'
    ]
)

console.log('---');

problem2(
    [ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]
)

console.log('---');

problem2(
    [
        '3',
        'U$myU$-->P@$asdqwe123P@$',
        'Sara 1232412',
        'U$NameU$P@$Pass234P@$'
    ]
)