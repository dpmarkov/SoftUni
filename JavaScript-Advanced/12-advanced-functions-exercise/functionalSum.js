function add(num) {
    let sum = num;

    function calc (n){
        sum += n;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}

console.log(Number(add(1)));

console.log(Number(add(2)(5)(10)));
