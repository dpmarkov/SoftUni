function solve (...args){
    let argsObj = {};

    for (let arg of args){
        console.log(`${typeof arg}: ${arg}`);
        
        if (!argsObj.hasOwnProperty(typeof arg)){
            argsObj[typeof arg] = 0;
        }

        argsObj[typeof arg]++;
    }

    const sorted = Object.entries(argsObj).sort((a, b) => {
        return b[1] - a[1];
    });

    for (let [key, value] of sorted){
        console.log(`${key} = ${value}`); 
    }
}

solve('cat', 'dog', 42, function () { console.log('Hello world!'); });
console.log('---');
solve({ name: 'bob'}, 3.333, 9.999);