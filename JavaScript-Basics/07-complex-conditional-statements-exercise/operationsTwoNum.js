function operationsTwoNum(a,b,c){ //works in Judge
    let x = Number(a);
    let y = Number(b)
    let z = c;
    let result = 0;
    let evenOdd = "odd";

    if (z === "-" || z === "+" || z === "*"){
        if (z === "-"){
            result = x-y;
        } else if (z === "+"){
            result = x+y;
        } else {
            result = x*y;
        }
        if (result % 2 == 0){
            evenOdd = "even"
        }
        console.log(x + " " + z + " " + y + " = " + result + " - " + evenOdd);
    } else if (z === "/"){
        if (y == 0){
            console.log(`Cannot divide ${x} by zero`);
        } else {
            result = (x/y).toFixed(2);
            console.log(`${x} / ${y} = ${result}`)
        }
    } else {
        if (y == 0){
            console.log(`Cannot divide ${x} by zero`);
        } else {
            result = x % y;
            console.log(`${x} % ${y} = ${result}`);
        }
    }
}
//operationsTwoNum("10","12","+");
//operationsTwoNum("7","3","*");