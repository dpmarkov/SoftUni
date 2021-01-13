function sumFirstLast(arr){
    let firstElm = Number(arr[0]);
    let lastElm = Number(arr[arr.length - 1]);

    return firstElm + lastElm;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log('---');
console.log(sumFirstLast(['5', '10']));
