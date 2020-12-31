function numberOnThirdPower(a){
    let num = Number(a);
    if (num % 2 === 0){
        for (let i = 2; i <= num; i+=2){
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }
    } else {
        for (let i = 1; i<= num; i+=2){
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }
    }
}