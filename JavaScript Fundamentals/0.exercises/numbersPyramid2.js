function numbersPyramid2(num){
    let line = "";
    let i = 1;
    let currentNum = 1;
    let isEnd = false;

    while (true){
        for (let k=0; k<i; k++){
            line += currentNum + " ";
            if (currentNum == num){
                isEnd = true;
                break;
            }
            currentNum++;
        }

        console.log(line);
        line = "";

        i++;
        if (isEnd){
            break;
        }
    }    
}

numbersPyramid(11);