function simpleCalculator(numOne, numTwo, operator){
    let result;

    if (operator == "multiply"){
        result = numOne * numTwo;
    } else if (operator == "divide"){
        result = numOne / numTwo;
    } else if (operator == "add"){
        result = numOne + numTwo;
    } else { //subtract
        result = numOne - numTwo;
    }

    console.log(result);
}