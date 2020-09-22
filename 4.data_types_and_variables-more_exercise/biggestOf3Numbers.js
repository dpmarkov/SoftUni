function biggestOf3Numbers(a, b, c){
    let result = Number(a);
    b = Number(b);
    c = Number(c);

    if (a < b){
        result = b;
    }

    if (result < c){
        result = c;
    }

    console.log(result);
}