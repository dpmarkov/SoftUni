function negativePositiveNumbers(arr){
    let result = [];

    for (let elm of arr){
        if (elm >= 0){
            result.push(elm);
        } else {
            result.unshift(elm);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])
console.log('---');
negativePositiveNumbers([3, -2, 0, -1])