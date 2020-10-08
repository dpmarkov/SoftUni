function charactersInRange(charOne, charTwo){
    let one = charOne.charCodeAt(0);
    let two = charTwo.charCodeAt(0);
    let result = '';

    if (two < one){
        let temp = two;
        two = one;
        one = temp;
    }

    for(i=one+1; i<two; i++){
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
}