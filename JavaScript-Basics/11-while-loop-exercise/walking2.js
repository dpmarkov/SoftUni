function walking2(input){
    let totalSteps = 0;
    let index = 0;

    while (input[index] != "Going home" && input[index] != undefined){
        totalSteps += Number(input[index]);
        index++;
    }
    if(input[index] == "Going home"){
        totalSteps += Number(input[index+1]);
    }
    if (totalSteps >= 10000){
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${10000-totalSteps} more steps to reach goal.`)
    }
}