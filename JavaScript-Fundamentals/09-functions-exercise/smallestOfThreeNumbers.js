function smallestOfThreeNumbers(a, b, c){
    let result = a;

    if (b < result){
        result = b
    }

    if (c < result){
        result = c
    }

    return result;
}