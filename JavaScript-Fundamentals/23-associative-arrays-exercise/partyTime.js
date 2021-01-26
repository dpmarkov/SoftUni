function partyTime(input) {
    let regularGuests = [];
    let vipGuests = [];

    let line = input.shift();
    while (line != "PARTY"){
        if (!isNaN(line[0])){
            vipGuests.push(line);
        } else {
            regularGuests.push(line);
        }

        line = input.shift()
    }

    for (let line2 of input){
        if (regularGuests.includes(line2)){
            regularGuests.splice(regularGuests.indexOf(line2), 1)
        }

        if (vipGuests.includes(line2)){
            vipGuests.splice(vipGuests.indexOf(line2), 1)
        }
    }

    console.log(vipGuests.length + regularGuests.length);
    
    for (let guest of vipGuests){
        console.log(guest);
    }
    for (let guest of regularGuests){
        console.log(guest);
    }
}

partyTime(
    ['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']
)