function getFibonator (){
    let a = 1, b = 0;
    return () => {
        let c = a + b;
        a = b;
        b = c;

        return c;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
