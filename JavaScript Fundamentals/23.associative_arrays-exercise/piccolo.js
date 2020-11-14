function piccolo(input) {
    let parkingLot = {};
    let isCarLotEmpty = true;

    for (let line of input){
        let [direction, carNumber] = line.split(', ');

        parkingLot[carNumber] = direction;
    }

    let sorted = Object.entries(parkingLot);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let keys of sorted){
        if (keys[1] == "IN"){
            console.log(keys[0]);
            isCarLotEmpty = false;
        }
    }

    if (isCarLotEmpty){
        console.log("Parking Lot is Empty");
    }
}

piccolo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)