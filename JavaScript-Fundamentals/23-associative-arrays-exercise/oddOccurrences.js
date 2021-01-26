function oddOccurrences(input) {
    let sentense = input.split(' ').map(x => x.toLowerCase());
    let words = new Map();
    
    for (let word of sentense){
        if (!words.has(word)){
            words.set(word, 1);
        } else {
            words.set(word, words.get(word)+1);
        }
    }

    let result = [];
    for (let word of words){
        if (word[1] % 2 != 0){
            result.push(word[0]);
        }
    }
    
    console.log(result.join(' '));
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)