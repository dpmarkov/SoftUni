function walking(input){
    let totalSteps = 0;

    for (i=0; i<=(input.length-1); i++){
        if (input[i] != "Going home"){
            totalSteps += Number(input[i]);
        }
    }
    if (totalSteps >= 10000){
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${10000-totalSteps} more steps to reach goal.`)
    }
}