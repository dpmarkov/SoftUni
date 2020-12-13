function problem3(input) {
    let guests = {}
    let unliked = 0;
    let command = input.shift().split('-');

    while (command[0] != 'Stop'){
        let [status, guest, meal] = command;

        if (status == 'Like'){
            if (!guests.hasOwnProperty(guest)){
                guests[guest] = []
            }

            if (!guests[guest].includes(meal)){
                guests[guest].push(meal);
            }
        } else {
            if (!guests.hasOwnProperty(guest)){
                console.log(`${guest} is not at the party.`);
            } else {
                if (!guests[guest].includes(meal)){
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                } else {
                    let index = guests[guest].indexOf(meal);
                    guests[guest].splice(index, 1);

                    console.log(`${guest} doesn't like the ${meal}.`);

                    unliked++;
                }
            }
        }

        command = input.shift().split('-');
    }

    let sorted = Object.entries(guests);
    sorted.sort(function (a, b){
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    });

    for (let tokens of sorted){
        console.log(`${tokens[0]}: ${tokens[1].join(', ')}`);
    }

    console.log(`Unliked meals: ${unliked}`)
}

problem3(
    [
        'Like-Krisi-shrimps',
        'Like-Krisi-soup',
        'Like-Misho-salad',
        'Like-Penelope-dessert',
        'Stop'
    ]
)

console.log('---');

problem3(
    [
        'Like-Krisi-shrimps',
        'Unlike-Vili-carp',
        'Unlike-Krisi-salad',
        'Unlike-Krisi-shrimps',
        'Stop'
    ]
)

console.log('---');

problem3(
    [
        'Like-Mike-frenchFries',
        'Like-Mike-salad',
        'Like-George-fruit',
        'Like-Steven-salad',
        'Unlike-Steven-salad',
        'Unlike-Steven-fruit',
        'Stop'
    ]
)