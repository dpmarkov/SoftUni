function emojiDetector([text]) {
    let pattern = /((:{2})|(\*{2}))(?<data>[A-Z][a-z]{2,})\1/g
    let pattern2 = /[0-9]/g
    let threshold = 1;

    text.match(pattern2).map(x => threshold = threshold * x);

    console.log(`Cool threshold: ${threshold}`);
    
    let match = pattern.exec(text);
    let emojisCount = 0;
    let coolEmojis = [];

    while (match != null){
        emojisCount++;

        let emoji = match['groups']['data'];
        let symbols = match[1];
        
        let sum = 0;

        for (let char of emoji){
            sum += Number(char.charCodeAt());
        }

        if (sum > threshold){
            coolEmojis.push(symbols+emoji+symbols);
        }

        match = pattern.exec(text);
    }

    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);

    if (coolEmojis.length > 0){
        console.log(coolEmojis.join('\n'));
    }
}

emojiDetector(
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    ]
)

console.log('---');

emojiDetector(
    [
        '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
    ]
)

console.log('---');

emojiDetector(
    [
        "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
    ]      
)

console.log('---');

emojiDetector(
    ['kk4k882k::Xgg::']
)