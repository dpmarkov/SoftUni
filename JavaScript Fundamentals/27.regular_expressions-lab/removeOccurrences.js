function removeOccurrences(word, text) {
    let occurance = text.indexOf(word);

    while (occurance != -1){
        text = text.substring(0, occurance) + text.substring(occurance + word.length);
        occurance = text.indexOf(word)
    }

    console.log(text);
}

removeOccurrences(
    'ice', 'kicegiciceeb'
)