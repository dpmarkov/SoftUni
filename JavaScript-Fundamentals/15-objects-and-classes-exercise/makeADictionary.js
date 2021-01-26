function makeADictionary(arr){
    let dict = []
    let terms = []

    for (i=0; i<arr.length; i++){
        let obj = JSON.parse(arr[i]);
        let term = Object.keys(obj)
        term = term[0];
        
        
        let description = obj[term];
        let newObj = {}

        newObj[term] = description
        if (!terms.includes(term)){
            dict.push(newObj)
            terms.push(term)
        } else { //new definition for term
            for (let k = 0; k<dict.length; k++){
                let keyDublObj = dict[k]
                keyDubl = Object.keys(keyDublObj);
                keyDubl = keyDubl[0];

                if (keyDubl == term){
                    keyDublObj[keyDubl] = description;
                    break;
                }
            }
        }
    }

    
    dict.sort(
        function(a, b){
            let aKey = Object.keys(a);
            aKey = aKey[0]
            let bKey = Object.keys(b);
            bKey = bKey[0]

            if (aKey > bKey){
                return 1
            } else {
                return -1
            }
        }
    )

    for (let someObj of dict){
        let someObjKey = Object.keys(someObj);
        someObjKey = someObjKey[0];
        let someObjValue = someObj[someObjKey];

        console.log(`Term: ${someObjKey} => Definition: ${someObjValue}`);
    }
}