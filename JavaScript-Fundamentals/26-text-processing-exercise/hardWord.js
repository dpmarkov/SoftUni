function hardWord(input) {
    let text = ` ${input[0]} `; //extra space to escape undefined
    let words = input[1];

    for (let word of words){
        for (let i=0; i<text.length-word.length; i++){
            if (text[i] == "_"){
                let match = true; 

                for (let k=i; k<i+word.length; k++){ //check if next chars are _
                    if (text[k] != "_"){
                        match = false;
                    }
                }

                if (text[i+word.length] == "_"){ //needs longer word
                    match = false;
                }

                if (text[i-1] == "_"){ //needs longer word
                    match = false;
                }

                if (match){ //swap with word
                    let firstHalf = text.substring(0, i);
                    let secondHalf = text.substring(i + word.length);
                    text = firstHalf + word + secondHalf;

                    i = text.length; //stop the for-loop and go for the next word
                }
            }
        }
    }

    console.log(text.trim());
}

// hardWord(
//     [
//         'The ___ __ ____.',
//         ['is', 'sky', 'blue']
//     ]
// )

hardWord(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)