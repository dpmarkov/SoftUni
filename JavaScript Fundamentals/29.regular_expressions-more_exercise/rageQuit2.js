function rageQuit([text]) {
//creating rage message---------------------------------------------
    let message = "";
    let pattern = /(?<string>[^0-9]+)(?<repeat>[\d]+)/g
    let matches = pattern.exec(text);

    while (matches != null){
        message += matches.groups.string.toLocaleUpperCase().repeat(matches.groups.repeat); 
        matches = pattern.exec(text);
    }
//---------------------------------------------creating rage message

//finding unique characters-----------------------------------------
    let uniqueChars = [];

    for (let char of message){
        char = char.toLocaleUpperCase();

        if (!uniqueChars.includes(char)){
            uniqueChars.push(char);
        }
    }
//-----------------------------------------finding unique characters

    console.log('Unique symbols used: ' + uniqueChars.length);
    console.log(message);
}

rageQuit(
    [ 'a3' ]
)

console.log('---');

rageQuit(
    [ 'aSd2&5s@1' ]
)

console.log('---');

rageQuit(
    [
        'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
    ]
)

console.log('---');

rageQuit(
    [ 'y 5jhhuii1kjpuj8' ]
)