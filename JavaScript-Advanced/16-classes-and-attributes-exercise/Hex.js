class Hex {
    constructor(number) {
        this.value = number;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toLocaleUpperCase();
    }

    plus(numOrHexObj) {
        let result;

        if (typeof numOrHexObj == 'number'){
            result = this.value + numOrHexObj;
        } else {
            result = this.value + numOrHexObj.value;
        }

        return new Hex(result);
    }

    minus(numOrHexObj) {
        let result;

        if (typeof numOrHexObj == 'number'){
            result = this.value - numOrHexObj;
        } else {
            result = this.value - numOrHexObj.value;
        }

        return new Hex(result);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
//console.log(FF.valueOf() + 1 == 256);

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');