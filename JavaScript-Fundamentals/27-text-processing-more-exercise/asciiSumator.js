function asciiSumator([charA, charB, text]) {
    let sum = 0;
    let charACode = charA.charCodeAt(0);
    let charBCode = charB.charCodeAt(0);

    a = Math.min(charACode, charBCode);
    b = Math.max(charACode, charBCode);

    for (let char of text){
        let charCode = char.charCodeAt(0);

        if (charCode > a && charCode < b){
            sum += charCode;
        }
    }

    console.log(sum);
}

asciiSumator(
    [ '.', '@', 'dsg12gr5653feee5' ]
)

console.log('---');

asciiSumator(
    [ '?', 'E', '@ABCEF' ]
)

console.log('---');

asciiSumator(
    [ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]
)