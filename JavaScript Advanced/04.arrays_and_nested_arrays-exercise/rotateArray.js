function rotateArray(arr, rotations) {
    for (i=1; i<=rotations; i++){
        if (arr.length > 1){
            let lastElm = arr.pop();
            arr.unshift(lastElm);
        }
    }

    console.log(arr.join(' '));
}

rotateArray(
    [
        '1',
        '2',
        '3',
        '4'
    ],
    2
)

console.log('---');

rotateArray(
    [
        'Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
);