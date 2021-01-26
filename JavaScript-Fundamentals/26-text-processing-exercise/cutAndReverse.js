function cutAndReverse(text) {
    let firstHalf = text.substring(0, text.length/2);
    let secondHalf = text.substring(text.length/2);
    let firstHalfR = "";
    let secondHalfR = "";

    for (let i=text.length/2-1; i>=0; i--){
        firstHalfR += firstHalf[i]
        secondHalfR += secondHalf[i]
    }

    console.log(firstHalfR);
    console.log(secondHalfR);
}

cutAndReverse(
    'tluciffiDsIsihTgnizamAoSsIsihT'
)

console.log('------------');

cutAndReverse(
    'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
)