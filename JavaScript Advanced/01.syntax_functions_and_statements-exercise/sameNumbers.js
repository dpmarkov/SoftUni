function sameNumbers(num) {
    let numToStr = '' + num;
    let sum = 0;
    let numToMatch = numToStr[0];
    let match = true;

    for (let char of numToStr){
        sum += Number(char);

        if (numToMatch != char){
            match = false;
        }
    }

    if (match){
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)
sameNumbers(5)