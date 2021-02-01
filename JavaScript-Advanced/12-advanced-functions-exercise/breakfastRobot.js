function solve() {
    const microElems = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (input){
        const order = input.split(' ');

        if (order[0] == 'restock'){
            microElems[order[1]] += Number(order[2]);

            return 'Success'; 
        } else if (order[0] == 'prepare'){
            const meal = order[1];
            const quantity = Number(order[2]);
            const neededIngredients = {};

            for (let ingredient in meals[meal]){
                neededIngredients[ingredient] = quantity * meals[meal][ingredient];
            }

            for (let ingredient in neededIngredients){
                if (neededIngredients[ingredient] > microElems[ingredient]){
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in neededIngredients){
                microElems[ingredient] -= neededIngredients[ingredient];
            }

            return 'Success'; 
        } else { //report
            let report = '';

            for (let elem in microElems){
                report += elem + '=' + microElems[elem] + ' ';
            }

            return report.trim();
        }
    };
}

const operations1 = solve();
console.log(operations1('restock carbohydrate 10'));
console.log(operations1('restock flavour 10'));
console.log(operations1('prepare apple 1'));
console.log(operations1('restock fat 10'));
console.log(operations1('prepare burger 1'));
console.log(operations1('report'));

console.log('---');

const operations2 = solve();
console.log(operations2('restock flavour 50'));
console.log(operations2('prepare lemonade 4'));

console.log('---');

const operations3 = solve();
console.log(operations3('prepare turkey 1'));
console.log(operations3('restock protein 10'));
console.log(operations3('prepare turkey 1'));
console.log(operations3('restock carbohydrate 10'));
console.log(operations3('prepare turkey 1'));
console.log(operations3('restock fat 10'));
console.log(operations3('prepare turkey 1'));
console.log(operations3('restock flavour 10'));
console.log(operations3('prepare turkey 1'));
console.log(operations3('report'));

console.log('---');

const operations4 = solve();
console.log(operations4('restock protein 100'));
console.log(operations4('restock carbohydrate 100'));
console.log(operations4('restock fat 100'));
console.log(operations4('restock flavour 100'));
console.log(operations4('report'));
console.log(operations4('prepare apple 2'));
console.log(operations4('report'));
console.log(operations4('prepare apple 1'));
console.log(operations4('report'));

console.log('---');

const operations5 = solve();
console.log(operations5('restock protein 100'));
console.log(operations5('restock carbohydrate 100'));
console.log(operations5('restock fat 100'));
console.log(operations5('restock flavour 100'));
console.log(operations5('report')); //protein=100 carbohydrate=100 fat=100 flavour=100
console.log(operations5('prepare eggs 2'));
console.log(operations5('report')); //protein=90 carbohydrate=100 fat=98 flavour=98
console.log(operations5('prepare eggs 1'));
console.log(operations5('report')); //protein=85 carbohydrate=100 fat=97 flavour=97
