function storeCatalogue(input) {
    let catalogue = [];

    for (let line of input){
        let [product, price] = line.split(' : ');
        price = Number(price);

        catalogue.push({
            'name': product,
            'price': price
        });
    }

    catalogue.sort((a, b) => a['name'].localeCompare(b['name']));
    
    let letter = '';

    for (let product of catalogue){
        if (letter != product['name'][0]){
            letter = product['name'][0];
            console.log(letter);
        }

        console.log(`  ${product['name']}: ${product['price']}`);
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);

console.log('---');

storeCatalogue(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
);