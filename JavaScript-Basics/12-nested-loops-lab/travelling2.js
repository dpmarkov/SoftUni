function travelling2(input){
    let i = 0;

    while(input[i] != "End"){
        if(isNaN(input[i])){ //cheating
            console.log(`Going to ${input[i]}!`);
        }
        i++;
    }
}