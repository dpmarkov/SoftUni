function wordsUppercase(input){
    let pattern = /\w+/g
    let words = input.match(pattern);

    words.forEach((val, i) => {
        words[i] = val.toLocaleUpperCase()
    });

    console.log(words.join(', ')); 
}

wordsUppercase('Hi, how are you');
console.log('---');
wordsUppercase('hello');