function invalidNumber(a){
    let num = Number(a);

    if (num >= 100 && num <=200 || num == 0){
        //nothing
    } else {
        console.log("invalid");
    }
}
//invalidNumber("75");