function garage(input) {
    let garages = new Map();

    for (let line of input){
        let [garageNum, carInfo] = line.split(' - ');
        carInfo = carInfo.split(', ');

        if (!garages.has(garageNum)){
            garages.set(garageNum, [])
        }

        let newCar = {};

        for (let tokens of carInfo){
            let [key, value] = tokens.split(': ');
            newCar[key] = value;
        }

        let existingCars = garages.get(garageNum);
        existingCars.push(newCar);
    }

    for (let garage of garages){
        console.log(`Garage № ${garage[0]}`);
        
        for (let car of garage[1]){
            let printLn = "--- ";
            for (let key of Object.keys(car)){
                printLn += `${key} - ${car[key]}, `;
            }
            
            printLn = printLn.slice(0, -2);
            console.log(printLn);
        }
    }
}
garage(
    ['1 - color: blue, fuel type: diesel',
     '1 - color: red, manufacture: Audi',
     '2 - fuel type: petrol',
     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)

console.log('--------------------------');

garage (
    [
    '3 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '87 - color: blue, fuel type: diesel',
    '19 - fuel type: petrol',
    '12 - color: red, manufacture: Audi',
    '598 - fuel type: petrol',
    '2 - fuel type: petrol',
    '5 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '5 - color: blue, fuel type: diesel',
    '99 - fuel type: petrol',
    '1 - color: red, manufacture: Audi',
    '598 - fuel type: petrol',
    '2 - fuel type: petrol',
    ]
)