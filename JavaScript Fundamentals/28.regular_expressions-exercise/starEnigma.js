function starEnigma(input) {
    let n = Number(input.shift());
    let attacked = [];
    let destroyed = [];

    for (i=0; i<n; i++){
        let message = input[i];
        let specialLetters = 0;
        let decryptedMsg = "";

        for (let char of message){
            char = char.toLowerCase();

            if (char == "s" || char == "t" || char == "a" || char == "r"){
                specialLetters++;
            }
        }

        for (let char of message){
            decryptedMsg += String.fromCharCode(char.charCodeAt(0) - specialLetters);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*\:[0-9]+[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->[0-9]+/

        if (pattern.test(decryptedMsg)){
            let match = decryptedMsg.match(pattern);
            let planetName = match['groups']['name'];
            let planetType = match['groups']['type'];

            if (planetType == 'A'){
                attacked.push(planetName);
            } else {
                destroyed.push(planetName);
            }
        }
    }

    attacked.sort();
    destroyed.sort();

    console.log(`Attacked planets: ${attacked.length}`);
    for (let planet of attacked){
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let planet of destroyed){
        console.log(`-> ${planet}`);
    }
}

starEnigma(
    [
        '2',
        'STCDoghudd4=63333$D$0A53333',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
)

console.log('\n-------------------\n');

starEnigma(
    [
        '3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
)