function printAndSum(x, y){
    let sum = 0;
    let numbers = "";

    for (i=x; i<=y; i++){
        numbers += i + " ";
        sum += i;
    }

    console.log(numbers)
    console.log("Sum: " + sum)
}