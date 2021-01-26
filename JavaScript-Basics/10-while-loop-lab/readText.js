function readText(input){
    let index = 0;
    let text = input[index];
    let count = 0;
    while(text != "Stop"){
        count++;
        index++;
        text = input[index];
    }
    console.log(count);
}
//readText([ 'Nakov', '1234', 'pass', '1324', '1234', 'Stop' ])