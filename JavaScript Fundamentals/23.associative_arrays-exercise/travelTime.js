function travelTime(input) {
    let travel = {}

    for (let line of input) {
        let [country, city, cost] = line.split(' > ');
        cost = Number(cost)
        
        if (!travel.hasOwnProperty(country)){
            travel[country] = {
                [city]: cost
            }
        } else {
            if (travel[country][city] != undefined){
                let currentCost = travel[country][city];
                travel[country][city] = Math.min(currentCost, cost);
            } else {
                travel[country][city] = cost;
            }
        }
    }
    
    let sortedByCountries = Object.entries(travel);
    sortedByCountries.sort(function (a, b){
        return a[0].localeCompare(b[0]);
    })
    
    for (let keys of sortedByCountries){
        let printLn = keys[0] + " ->";
        
        let sortedByCost = Object.entries(keys[1]);
        sortedByCost.sort(function (a, b) {
            return a[1]-b[1];
        })
        
        for (let city of sortedByCost){
            printLn += " " + city[0] + " -> " + city[1];
        }

        console.log(printLn);
    }
}

travelTime(
    [   
        "Bulgaria > Sopot > 800",
        "Bulgaria > Sofia > 500",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
)