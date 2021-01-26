function addAndSubstract(a, b, c){
    function sum(numOne, numTwo){
        return (numOne + numTwo);
    }

    function subtract(numOne, numTwo){
        return (numOne - numTwo);
    }

    result = sum(a, b);
    result = subtract(result, c);

    console.log(result);
}