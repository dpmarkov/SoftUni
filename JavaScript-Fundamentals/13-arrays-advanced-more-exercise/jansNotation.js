function jansNotation(arr){
    let operands = []
    let operator = "";
    let error = false;

    for (let i=0; i<arr.length; i++){
        if (typeof(arr[i]) == "number"){
            operands.push(arr[i])
        } else { //we have received an operator
            operator = arr[i];

            if (operands.length >= 2){
                let length = operands.length;
                let result;

                if (operator == "+"){
                    result = operands[length-2] + operands[length-1];
                } else if (operator == "-"){
                    result = operands[length-2] - operands[length-1];
                } else if (operator == "*"){
                    result = operands[length-2] * operands[length-1];
                } else { // delete
                    result = operands[length-2] / operands[length-1];
                }

                operands.splice(operands.length-2, 2) //removing last two numbers
                operands.push(result);
            } else {
                i = arr.length; //stop the loop
                console.log("Error: not enough operands!");
                error = true;
            }
        }
    }

    if (operands.length == 1 && error == false){
        console.log(operands[0]);
    } else if (operands.length > 1){
        console.log("Error: too many operands!");
    }
}