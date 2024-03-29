function solve(arr) {
    const brands = {};

    for (let item of arr){
        let [brand, model, quantity] = item.split(' | ');
        quantity = Number(quantity);

        if (!brands.hasOwnProperty(brand)){
            brands[brand] = {};
        }

        if (!brands[brand].hasOwnProperty(model)){
            brands[brand][model] = 0;
        }

        brands[brand][model] += quantity;
    }

    for (let brand in brands){
        console.log(brand);

        for (let model in brands[brand]){
            console.log(`###${model} -> ${brands[brand][model]}`);
        }
    }
}

solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);