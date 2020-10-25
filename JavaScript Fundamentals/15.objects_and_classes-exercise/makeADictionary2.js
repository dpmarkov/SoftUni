function makeADictionary2(arr){
    let dict = {}

    for (let obj of arr){
        obj = JSON.parse(obj)
        Object.assign(dict, obj)
    }

    let keys = Object.keys(dict);
    keys.sort();

    for (let key of keys){
        let term = key;
        let definition = dict[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}