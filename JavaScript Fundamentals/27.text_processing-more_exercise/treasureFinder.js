function treasureFinder(input) {
    let keys = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line != 'find'){
        let index = 0;
        let msg = '';
        let pattern1 = /&[^&]+&/;
        let pattern2 = /<[^<>]+>/;

        for (let char of line){
            let charNum = char.charCodeAt() - keys[index];
            msg += String.fromCharCode(charNum);

            index++;
            if (index == keys.length){
                index = 0;
            }
        }

        let match1 = msg.match(pattern1);
        let match2 = msg.match(pattern2);
        console.log(`Found ${match1[0].slice(1, -1)} at ${match2[0].slice(1, -1)}`);

        line = input.shift();
    }
}

treasureFinder(
    [
        '1 2 1 3',
        "ikegfp'jpne)bv=41P83X@",
        "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
        'find'
    ]
)

console.log('---');

treasureFinder(
    [
        '1 4 2 5 3 2 1',
        `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
        "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
        "'stj)>34W68Z@",
        'find'
    ]
)
