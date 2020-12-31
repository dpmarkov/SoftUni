function verySpecialNumbers(a,b,c){
    let start = Number(a);
    let end = Number(b);
    let n = Number(c);
    
    for( let i = start; i <= end; i++){
        let numberPow = Math.pow(n,2);
        if (i % numberPow === 0){
            console.log(`Very special number: ${i}`);
        } else if (i % n === 0){
            console.log(`Special number: ${i}`);
        } else {
            console.log(i);
        }
    }
}