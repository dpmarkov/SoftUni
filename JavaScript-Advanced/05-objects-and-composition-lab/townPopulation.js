function townPopulation(arr) {
    let towns = {};

    for (let item of arr) {
        let [townName, population] = item.split(' <-> ');
        population = Number(population);

        if (towns[townName] == undefined) {
            towns[townName] = 0;
        }
        
        towns[townName] += population;
    }

    for (let town in towns){
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]
);