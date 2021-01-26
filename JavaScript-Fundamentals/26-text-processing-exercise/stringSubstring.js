function stringSubstring(search, text) {
    text = " " + text.trim() + " ";
    searchPlusSpaces = " " + search + " ";

    for (i=0; i<=text.length-searchPlusSpaces.length; i++){
        let word = text.substring(i, i+searchPlusSpaces.length);

        if (word.toLowerCase() == searchPlusSpaces.toLowerCase()){
            return console.log(search);
        }
    }

    console.log(`${search} not found!`); 
}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)

console.log('-----------------------------------');

stringSubstring(
    'python',
    'JavaScript is the best programming language'
)

console.log('-----------------------------------');

stringSubstring(
    'tEst',
    '8bbb TESt'
)

console.log('-----------------------------------');

stringSubstring(
    'test4',
    'TESt4    iii  4n'
)