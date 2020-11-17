function legendaryFarming(input) {
    let materials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    }
    let junk = {};
    
    input = input.split(' ');

    while (materials['shards'] < 250 && materials['fragments'] < 250 && materials['motes'] < 250){
        let qty = input.shift();

        if (qty == undefined){
            break;
        }

        qty = Number(qty);

        let material = input.shift().toLowerCase();

        if (!materials.hasOwnProperty(material)){
            if (!junk.hasOwnProperty(material)){
                junk[material] = qty;
            } else {
                junk[material] += qty;
            }
        } else {
            materials[material] += qty;
        } 
    }

    if (materials['shards'] >= 250){
        console.log('Shadowmourne obtained!');
        materials['shards'] -= 250;
    } else if (materials['fragments'] >= 250){
        console.log('Valanyr obtained!');
        materials['fragments'] -= 250;
    } else if (materials['motes'] >= 250){
        console.log('Dragonwrath obtained!');
        materials['motes'] -= 250;
    }
    
    let sortedMat = Object.entries(materials);
    sortedMat.sort(function (a, b){
        if (a[1] != b[1]){
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    })

    for (let tokens of sortedMat){
        console.log(`${tokens[0]}: ${tokens[1]}`);
    }

    let sortedJunk = Object.entries(junk);
    sortedJunk.sort(function (a, b){
        return a[0].localeCompare(b[0]);
    })

    for (let tokens of sortedJunk){
        console.log(`${tokens[0]}: ${tokens[1]}`);
    }
}

legendaryFarming(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
)

console.log('--------------');

legendaryFarming(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)