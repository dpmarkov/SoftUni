function extractIncreasingSubsequence(arr) {
    //Extract Increasing Subsequence from Array
    let tempN = arr[0];
    let newArr = [];

    for (let item of arr) {
        if (tempN <= item) {
            newArr.push(item);
            tempN = item;
        }
    }

    return newArr;
}

console.log(
    extractIncreasingSubsequence(
        [
            1,
            3,
            8,
            4,
            10,
            12,
            3,
            2,
            24
        ]
    )
);



console.log('---');

console.log(
    extractIncreasingSubsequence(
        [
            1,
            2,
            3,
            4
        ]
    )
);



console.log('---');

console.log(
    extractIncreasingSubsequence(
        [
            20,
            3,
            2,
            15,
            6,
            1
        ]
    )
);

