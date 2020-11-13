function storage(input) {
    let items = new Map();
    
    for (let line of input){
        let [name, qty] = line.split(' ');
        qty = Number(qty);

        if (!items.has(name)){
            items.set(name, qty);
        } else {
            let existing = items.get(name);
            items.set(name, existing + qty);
        } 
    }
    
    for (let [key, value] of items){
        console.log(`${key} -> ${value}`);
        
    }
}

storage(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)