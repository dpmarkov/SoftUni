function factorialDivision(a, b){
    factA = 1;
    factB = 1;

    for (let i = a; i >= 1; i--) {
        factA *= i;
    }

    for (let i = b; i >= 1; i--) {
        factB *= i;
    }

    console.log((factA / factB).toFixed(2));
}