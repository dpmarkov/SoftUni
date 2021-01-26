function censoredWords(string, search) {
    let found = string.indexOf(search);

    while (found != -1){
        let firstPart = string.substring(0, found);
        let secondPart = string.substring(found + search.length);

        string = firstPart + '*'.repeat(search.length) + secondPart;
        found = string.indexOf(search);
    }
    
    console.log(string);
}

censoredWords("A small sentence with some words", "small")