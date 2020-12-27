function oneTwoHundred(x){
    let y = Number(x);
    if (y<100){
        console.log("Less than 100");
    }
    else if(y<=200){
        console.log("Between 100 and 200");    
    }
    else{
        console.log("Greater than 200");     
    }
}
oneTwoHundred(45);
oneTwoHundred(134);
oneTwoHundred(400);