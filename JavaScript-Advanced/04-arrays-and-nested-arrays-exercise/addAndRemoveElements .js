function addAndRemoveElements(commands) {
    let n = 1;
    let result = [];

    for (let command of commands){
        if (command == 'add'){
            result.push(n);
        } else { //remove
            if (result.length != 0){
                result.pop();
            }
        }

        n++;
    }

    if (result.length != 0){
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
        
    }
}

addAndRemoveElements(
    [   
        'add',
        'add',
        'add',
        'add'
    ]
);

console.log('---');

addAndRemoveElements(
    [   
        'add',
        'add',
        'remove',
        'add',
        'add'
    ]
);

console.log('---');

addAndRemoveElements(
    [
        'remove', 
        'remove', 
        'remove'
    ]
);