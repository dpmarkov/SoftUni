function postOffice([input]) {
    let [firstPart, secondPart, thirdPart] = input.split('|');
    let pattern1 = /([\#\$\%\*\&])[A-Z]+\1/g
    let pattern2 = /[\d]{2}:[\d]{2}/g
    let capitalLetters = firstPart.match(pattern1).map(x => x.slice(1, -1)).join('').split('');
    let startLetterLength = secondPart.match(pattern2);
    let wordsOptions = thirdPart.split(' ');
    let words = [];

    for (let capLetter of capitalLetters){
        for (let tokens of startLetterLength){
            [letter, length] = tokens.split(':');
            letter = String.fromCharCode(letter);
            length = Number(length);

            if (letter == capLetter){
                for (let pWord of wordsOptions){
                    if (pWord[0] == letter && pWord.length == length + 1){
                        words.push(pWord);

                        let index2 = wordsOptions.indexOf(pWord);
                        wordsOptions.splice(index2, 1);
                    }
                }

                let index1 = startLetterLength.indexOf(tokens);
                startLetterLength.splice(index1, 1);
                break;
            }
        }
    }

    console.log(words.join('\n'));
}

postOffice(
    [
        'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
    ]
)

console.log('---');

postOffice(
    [
        'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
    ]
)
