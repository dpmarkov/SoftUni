function travelling(input){
    let i = 0;
    let destination;
    let price;
    let counter = 0;
    savedMoney = 0;

    while(input[i] != "End"){
        if(isNaN(input[i])){
            destination = input[i];
            price = input[i+1];
            i += 2;
        }
        savedMoney += input[i];
        counter++;
        if (savedMoney >= price){
            counter = 0;
            console.log(`Going to ${input[i-counter]}!`);
        }
        i++;
    }
}