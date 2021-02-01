function subNum(arr, start, end) {
    if (Array.isArray(arr) == false){
        return NaN;
    }

    if (start < 0){
        start = 0;
    }

    if (end > arr.length - 1){
        end = arr.length - 1;
    }

    return arr.slice(start, end + 1).reduce((acc, c) => acc + Number(c), 0);
}

console.log('case 1:');
console.log(subNum([10, 20, 30, 40, 50, 60], 3, 300));
console.log('case 2:');
console.log(subNum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('case 3:');
console.log(subNum([10, 'twenty', 30, 40], 0, 2));
console.log('case 4:');
console.log(subNum([], 1, 2));
console.log('case 5:');
console.log(subNum('text', 0, 2));