function numberPyramid(input){
    let num = Number(input[0]);
    let lines = 10;
    let numsOnLines = 1;
    let currentNum = 1;
    let printLine = "";
    let isEnd = false;

    while(true){
        for(let k = 1; k <= numsOnLines; k++){
            printLine += currentNum + " ";
            
            if (currentNum == num){
                isEnd = true;
                break;
            }
            currentNum++;
        }
        numsOnLines++;
        console.log(printLine);
        if (isEnd){
            break;
        }
        printLine = "";
    }
}
//numberPyramid(["8"]);