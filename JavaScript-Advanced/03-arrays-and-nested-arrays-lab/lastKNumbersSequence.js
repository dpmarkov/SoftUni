function lastKNumbersSequence(n, k){
    let result = [1];

    for (let i=1; i<n; i++){
        let newElm = 0;
        let count = 1;

        for (let i = result.length-1; i>=0 && count<=k; i-- && count++){
            newElm += result[i];
        }

        result.push(newElm);
    }

    return result; 
}

console.log(lastKNumbersSequence(6, 3));
console.log('---');
console.log(lastKNumbersSequence(8, 2));