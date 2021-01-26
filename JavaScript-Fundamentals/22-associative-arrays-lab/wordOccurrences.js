function wordOccurrences(input) {
    let dict = {}
    for (let word of input){
        if (!dict.hasOwnProperty(word)){
            dict[word] = 1;
        } else {
            dict[word]++;
        }
    }

    let sorted = Object.entries(dict);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let keys of sorted){
        console.log(`${keys[0]} -> ${keys[1]} times`);
    }
}

wordOccurrences(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
)