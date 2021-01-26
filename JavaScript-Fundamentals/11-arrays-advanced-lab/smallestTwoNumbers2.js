function smallestTwoNumbers2 (arr){
    let sortArr = arr.sort((a, b) => {
        return a-b;
    });

    let resultArr = sortArr.slice(0, 2);

    console.log(resultArr.join(' '));
}