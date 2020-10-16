function sorting (arr){
    arr.sort((a, b)=>{return a-b})
    let asc = [...arr]
    asc.length
    arr.sort((a, b)=>{return b-a})
    let desc = [...arr]
    let result = "";

    for (i=0; i<arr.length/2; i++){
        if (i == Math.floor(arr.length/2)){
            result += desc[i];
        } else {
            result += desc[i] + " " + asc[i] + " ";
        }
    }

    console.log(result);
}