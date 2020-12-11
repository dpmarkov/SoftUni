function pirates(input) {
    let line = input.shift();
    let cities = {};

    while (line != 'Sail') {
        let [name, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(name)){
            cities[name] = {
                population,
                gold
            };
        } else {
            cities[name]['population'] += population;
            cities[name]['gold'] += gold;
        }
        
        line = input.shift();
    }

    action = input.shift().split('=>');

    while (action[0] != 'End') {
        if (action[0] == 'Plunder'){
            let town = action[1];
            let killed = Number(action[2]);
            let stolen = Number(action[3]);

            console.log(`${town} plundered! ${stolen} gold stolen, ${killed} citizens killed.`);
            
            cities[town]['population'] -= killed;
            cities[town]['gold'] -= stolen;

            if (cities[town]['population'] == 0 || cities[town]['gold'] == 0){
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else { //prosper
            let town = action[1];
            let addGold = Number(action[2]);

            if (addGold < 0){
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town]['gold'] += addGold;
                console.log(`${addGold} gold added to the city treasury. ${town} now has ${cities[town]['gold']} gold.`);
            }
        }

        action = input.shift().split('=>');
    }
    
    if (Object.keys(cities).length == 0){
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        let sorted = Object.entries(cities);

        sorted.sort(function (cityA, cityB) {
            return cityB[1].gold - cityA[1].gold || cityA[0].localeCompare(cityB[0]);
        });

        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        
        for (let tokens of sorted){
            console.log(`${tokens[0]} -> Population: ${tokens[1].population} citizens, Gold: ${tokens[1].gold} kg`);
        }
    }
}

pirates(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
    ]
)

console.log('---');

pirates(
    [
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End'
    ]
)