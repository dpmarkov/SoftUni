function cookingByNumbers(input) {
    let num = Number(input.shift());
    let operation = input.shift();

    while (operation != undefined){
        if (operation == 'chop'){
            num = num / 2;
        } else if (operation == 'dice'){
            num = Math.sqrt(num);
        } else if (operation == 'spice'){
            num++;
        } else if (operation == 'bake'){
            num *= 3;
        } else { //fillet
            num = num * 0.8;
            num = num.toFixed(1);
            num = Number(num);
        }

        console.log(num);
        
        operation = input.shift();
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log('---');
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])