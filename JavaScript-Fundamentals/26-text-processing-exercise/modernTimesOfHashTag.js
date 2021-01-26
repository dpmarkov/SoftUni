function modernTimesOfHashTag(input) {
    let words = input.split(' ');
    let result = "";
    
    for (let word of words){
        if (word[0] == "#"){
            if ((word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90) || (word.charCodeAt(1) >= 97 && word.charCodeAt(1) <= 122)){
                result += word.substring(1) + "\n";
            }
        }
    }

    console.log(result);
}

modernTimesOfHashTag(
    '#Nowadays #everyone uses # to #5tag a #special ##word in #socialMedia'
)