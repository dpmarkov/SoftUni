function printAnArrayWithAGivenDelimiter(arr, delimiter) {
    console.log(arr.join(delimiter));
}

printAnArrayWithAGivenDelimiter(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
);
console.log('---');
printAnArrayWithAGivenDelimiter(
    [
        'How about no?', 
        'I',
        'will', 
        'not', 
        'do', 
        'it!'
    ], 
    '_'
);
