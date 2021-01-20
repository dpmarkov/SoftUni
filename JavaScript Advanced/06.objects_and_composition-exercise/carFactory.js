function carFactory(objInput) {
    let model = objInput.model;
    let power = objInput.power;
    let carriage = objInput.carriage;
    let color = objInput.color;
    let wheelsize = objInput.wheelsize;
    let volume;
    let type;
    let wheels = [];

    if (objInput.power <= 90){
        power = 90;
        volume = 1800;
    } else if (objInput.power <= 120){
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    let engine = {
        power,
        volume
    }
    
    if (carriage == 'hatchback'){
        type = 'hatchback';
    } else {
        type = 'coupe';
    }

    if (wheelsize % 2 == 0){
        wheelsize--;
    }

    for (let i = 0; i<4; i++){
        wheels.push(wheelsize);
    }

    return {
        model,
        engine,
        'carriage' : {
            type,
            color
        },
        wheels
    };
}

let result1 = carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

console.log(result1);
console.log('---');

let result2 = carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);

console.log(result2);