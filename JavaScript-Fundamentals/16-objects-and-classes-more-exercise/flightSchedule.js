function flightSchedule(arr){
    let flights = []

    arr[0].forEach(element => {
        element = element.split(' ');

        let sector = element[0]
        let destination = element[1]
        let flightToAdd = {}

        flightToAdd["sector"] = sector;
        flightToAdd["destination"] = destination;
        flightToAdd["status"] = "Ready to fly";
        flights.push(flightToAdd)
    });

    arr[1].forEach(element => {
        element = element.split(' ');

        let sector = element[0]
        let status = element[1]

        flights.forEach(element => {
            if (element.sector == sector){
                element.status = status;
            }
        });
    });

    let printStatus = arr[2][0];
    
    flights.forEach(element => {
        if (element.status == printStatus){
            console.log(`{ Destination: '${element.destination}', Status: '${element.status}' }`);
        }
    });
}

//input
flightSchedule(
    [
        ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],

        ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],

        ['Ready to fly']
    ]
 
);
