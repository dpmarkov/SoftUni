function aMinerTask(input) {
    let storage = {}

    for (let i=0; i<input.length; i=i+2){
        let metal = input[i];
        let qty = Number(input[i+1]);

        if (!storage.hasOwnProperty(metal)){
            storage[metal] = qty;
        } else {
            storage[metal] += qty;
        }
    }
    
    for (let key in storage){
        console.log(`${key} -> ${storage[key]}`);
        
    }
}

aMinerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]           
)