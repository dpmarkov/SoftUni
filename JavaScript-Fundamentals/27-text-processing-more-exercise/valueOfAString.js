function valueOfAString([text, type]) {
    let sum = 0;

    if (type == "LOWERCASE"){
        for (let char of text){
            let charN = char.charCodeAt(0);
            if (charN >= 97 && charN <= 122){
                sum+= charN;
            }
        }
    } else {
        for (let char of text){
            let charN = char.charCodeAt(0);
            if (charN >= 65 && charN <= 90){
                sum+= charN;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(
    [ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]
)

console.log('---');

valueOfAString(
    [ 'AC/DC', 'UPPERCASE', '' ]
)