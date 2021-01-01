function maxNumber(input){
    let index = 0;
    let totalCount = Number(input[index]);
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let count = 0;

    while(count < totalCount){
        let num = Number(input[index]);
        index++;
        if (num > maxNumber){
            maxNumber = num;
        }
        count++;
    }
    console.log(maxNumber);
}