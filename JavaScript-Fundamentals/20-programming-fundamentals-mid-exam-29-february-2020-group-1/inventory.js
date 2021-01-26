function inventory(input) {
    let items = input.shift().split(', ');
    let action = input.shift().split(' - ');

    while (action[0] != 'Craft!'){
        if (action[0] == 'Collect'){
            if (!items.includes(action[1])){
                items.push(action[1]);
            }
        } else if (action[0] == 'Drop'){
            if (items.includes(action[1])){
                let index = items.indexOf(action[1]);
                items.splice(index, 1);
            }
        } else if (action[0] == 'Combine Items'){
            let [oldItem, newItem] = action[1].split(':');

            if (items.includes(oldItem)){
                let index = items.indexOf(oldItem);
                items.splice(index + 1, 0, newItem);
            }
        } else { //renew
            if (items.includes(action[1])){
                let index = items.indexOf(action[1]);
                items.splice(index, 1);
                items.push(action[1]);
            }
        }
        action = input.shift().split(' - ');
    }

    console.log(items.join(', '))
}

inventory(
    [ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]
)

console.log('---');


inventory(
    [
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]      
)