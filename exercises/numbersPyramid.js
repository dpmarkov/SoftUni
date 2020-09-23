function numbersPyramid(num){
    let line = "";

    for (let i=1; i<=num; i++){
        for (let k=1; k<=i; k++){
            line += k + " ";
        }

        console.log(line);
        line = "";
    }    
}

numbersPyramid(5);
