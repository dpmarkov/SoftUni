class Parking {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    findCar (carNumber) {
        for (let i=0; i<this.vehicles.length; i++){
            let car = this.vehicles[i];

            if (car.carNumber == carNumber) {
                return i;
            }
        }

        return null;
    }

    addCar(carModel, carNumber) {
        if (this.capacity == 0) {
            throw new Error('Not enough parking space.');
        }

        this.capacity--;
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    
    removeCar (carNumber) {
        const carIndex = this.findCar(carNumber);
        if (carIndex == null){
            throw new Error ('The car, you\'re looking for, is not found.');
        }

        const car = this.vehicles[carIndex];

        if (car.payed == false) {
            throw new Error (`${car.carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(carIndex, 1);
        this.capacity++;
        return `${car.carNumber} left the parking lot.`;
    }

    pay (carNumber) {
        const carIndex = this.findCar(carNumber);
        if (carIndex == null){
            throw new Error (`${carNumber} is not in the parking lot.`);
        }

        const car = this.vehicles[carIndex];

        if (car.payed == true) {
            throw new Error (`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            let result = `The Parking Lot has ${this.capacity} empty spots left.`;

            this.vehicles.sort((a, b) => {
                a.carModel.localeCompare(b.carModel);
            }).map(car => {
                let isPayed = 'Not payed';
                if (car.payed == true){
                    isPayed = 'Has payed';
                }
                result += `\n${car.carModel} == ${car.carNumber} - ${isPayed}`; 
            });

            return result;
        } else {
            const carIndex = this.findCar(carNumber);
            const car = this.vehicles[carIndex];

            let isPayed = 'Not payed';
            if (car.payed == true){
                isPayed = 'Has payed';
            }
            return `${car.carModel} == ${carNumber} - ${isPayed}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

// output:
// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.
