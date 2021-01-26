function passwordGenerator(input){
    let n = Number(input[0]);
    let l = Number(input[1]);
    let printLine = "";
    for(let a = 1; a < n; a++){
        for(let b = 1; b < n; b++){
            for(let c = 97; c < 97+l; c++){
                for(let d = 97; d < 97+l; d++){
                    for(let e = 1; e <= n; e++){
                        if(e>a && e>b){
                            printLine += a + "" + b + String.fromCharCode(c) + String.fromCharCode(d) + e + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(printLine);
}