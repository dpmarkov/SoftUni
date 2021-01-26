function serializeString([text]) {
    let chars = {};

    for (let i=0; i<text.length; i++){
        if (!chars.hasOwnProperty(text[i])){
            chars[text[i]] = [];
        }

        chars[text[i]].push(i)
    }

    for (let key of Object.keys(chars)){
        let values = chars[key].join('/');
        console.log(`${key}:${values}`);
    }
}

serializeString(
    [ 'abababa', '' ]
)

console.log('---');

serializeString(
    [ 'avjavamsdmcalsdm', '' ]
)