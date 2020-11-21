function pascalCaseSplitter(text) {
    let words = [];
    let word = "";

    for (let char of text){
        if (word.length != 0 && !(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)){
            word += char
        } else {
            if (word.length != 0){
                words.push(word);
            }

            word = "";
            word += char;
        }
    }

    words.push(word); //last word

    console.log(words.join(', '));
}

pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
)

console.log('---------------');

pascalCaseSplitter(
    'HoldTheDoor'
)

console.log('---------------');

pascalCaseSplitter(
    'Test'
)
