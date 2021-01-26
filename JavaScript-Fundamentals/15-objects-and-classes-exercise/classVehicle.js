class Vehicle {
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts['engine'],
            power: parts['power']
        }
        this.parts.quality = this.quality();
        this.fuel = fuel;
    }
    
    quality(){
        return this.parts.engine * this.parts.power;
    }

    drive(fuelLoss){
        return this.fuel -= fuelLoss;
    }
}