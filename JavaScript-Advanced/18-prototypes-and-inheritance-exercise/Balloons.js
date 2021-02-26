function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }
    
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
    
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength)
            }
        }
    
        get ribbon() {
            return this._ribbon;
        }
    }
    
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
    
            this._text = text;
        }
    
        get text () {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

const classes = solve();
let test = new classes.BirthdayBalloon('Blue', 20.5, 'Green', 10.25, 'Happy Birthday!!!');
console.log(test.ribbon.length);