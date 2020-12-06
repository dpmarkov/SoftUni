function deserializeString(input) {
    let word = [];
    let line = input.shift();

    while (line != 'end'){
        let letter = line[0];
        let indexes = line.substring(2).split('/');

        for (let index of indexes){
            word[index] = letter;
        }

        line = input.shift();
    }

    console.log(word.join(''));
}

deserializeString(
    [ 'a:0/2/4/6', 'b:1/3/5', 'end' ]
)

console.log('---');

deserializeString(
    [
        'a:0/3/5/11', 'v:1/4',
        'j:2',        'm:6/9/15',
        's:7/13',     'd:8/14',
        'c:10',       'l:12',
        'end'
    ]
)
