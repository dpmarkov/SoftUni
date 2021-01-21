function heroicInventory(arr) {
    let register = [];

    for (let elm of arr) {
        let [name, level, itemsAsStr] = elm.split(' / ');
        level = Number(level);
        let items = [];

        if (itemsAsStr != undefined){
            items = itemsAsStr.split(', ');
        }
        
        let hero = {
            name,
            level,
            items
        };

        register.push(hero);
    }

    return JSON.stringify(register);
}

// [
//     {
//         "name": "Jake",
//         "level": 1000,
//         "items": ["Gauss", "HolidayGrenade"]
//     }
// ]

let result1 = heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

console.log(result1);
console.log('---');

let result2 = heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
);

console.log(result2);
