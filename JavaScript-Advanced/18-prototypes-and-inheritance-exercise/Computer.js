function solve() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer { //abstract class
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);

            if (this.constructor == Computer) {
                throw new Error('You cannot instantiate an abstract class.');
            }
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.weight = Number(weight);
            this.color = color;
            this._battery = battery;

            if (battery.constructor != Battery) {
                throw new TypeError('Battery is not an instance of class Battery.');
            }
        }

        get battery() {
            return this._battery;
        }

        set battery(obj) {
            if (obj instanceof Battery) {
                return this._battery = obj;
            } else {
                throw new TypeError('Battery is not an instance of class Battery.');
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this._keyboard = keyboard;
            this._monitor = monitor;

            if (keyboard.constructor != Keyboard) {
                throw new TypeError('Keyboard is not an instance of class Keyboard.');
            }
            if (monitor.constructor != Monitor) {
                throw new TypeError('Monitor is not an instance of class Monitor.');
            }
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(obj) {
            if (obj instanceof Keyboard) {
                this._keyboard = obj;
            } else {
                throw new TypeError('Keyboard is not an instance of class Keyboard.')
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(obj) {
            if (obj instanceof Monitor) {
                this._monitor = obj;
            } else {
                throw new TypeError('Monitor is not an instance of class Monitor.')
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

const classes = solve();

const myBattery = new classes.Battery('Toshiba', 2);
const myPC = new classes.Laptop('IBM', 1.7, 2, 1, 3, 'black', myBattery);
console.log(myPC);

const myCustomBattery = { manufacturer: 'Samsung', expectedLife: 4 };

try {
    myPC.battery = myCustomBattery; //throws type error
} catch (err) {
    console.error(err.message);
}

try {
    const myCustomPC = new classes.Laptop('HP', 3.2, 8, 4, 2.4, 'pearly white', myCustomBattery); //throws type error
} catch (err) {
    console.error(err.message);
}

try {
    const wrongInstance = new classes.Computer('Acer', 2, 2, 2); //throws an error
} catch (err) {
    console.error(err.message);
}

let keyboard = new classes.Keyboard('Logitech',70);
let monitor = new classes.Monitor('Benq', 28, 18);
let desktop = new classes.Desktop("JAR Computers", 3.3, 8, 1, keyboard, monitor);

console.log(desktop.monitor);
console.log(monitor);