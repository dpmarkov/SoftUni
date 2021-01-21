function lowestPricesInCities(arr) {
    let products = {};

    for (let line of arr){ //filling in the products with default value
        let [ , product] = line.split(' | ');
        products[product] = {
            town: '',
            price: 0
        };
    }

    for (let line of arr){
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (products[product]['town'] == ''){ //product has no town & price data
            products[product]['town'] = town;
            products[product]['price'] = price;
        } else if (products[product]['town'] == town){ //receive same town twice
            products[product]['price'] = price;
        } else if (products[product]['price'] > price){ //lower price in other town
            products[product]['town'] = town;
            products[product]['price'] = price;
        }
    }

    for (let product in products){
        console.log(`${product} -> ${products[product]['price']} (${products[product]['town']})`);
    }
}

lowestPricesInCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);