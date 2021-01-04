function sumOfTwoNumbers(input){
    let first = Number(input[0]);
    let last = Number(input[1]);
    let magic = Number(input[2]);
    let flag = false;
    let combs = 0;

    loop1:
    for (let a=first; a<=last; a++){
        for (let b=first; b<=last; b++){
            combs++;

            if(a+b == magic){
                flag = true;
                console.log(`Combination N:${combs} (${a} + ${b} = ${magic})`);
                break loop1;
            }
        }
    }

    if (flag == false){
        console.log(`${combs} combinations - neither equals ${magic}`);
    }
}

//sumOfTwoNumbers([ '1', '10', '5' ]);