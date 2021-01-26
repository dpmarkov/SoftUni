function rageQuit([text]) {
//creating rage message---------------------------------------------
    let message = "";
    let tempText = "";
    let tempNum = "";

    for (let char of text){
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){ //if char is a number
            tempNum += char;
        } else { //not a number
            if (tempNum != ""){
                tempNum = Number(tempNum);
                tempText = tempText.toLocaleUpperCase();
                message += tempText.repeat(tempNum);
                tempText = "";
                tempNum = "";
            }

            tempText += char;
        }
    }

    tempNum = Number(tempNum);
    tempText = tempText.toLocaleUpperCase();
    message += tempText.repeat(tempNum);
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
    [ 'y 5' ]
)