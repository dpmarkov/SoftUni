function numbers(str){
    let arr = str.split(' ').map(Number);
    let average = arr.reduce((a, b) => a + b) / arr.length;
    let topNums = arr.filter(x => x > average);

    console.log(topNums.sort((a, b) => b - a).slice(0, 5).join(' ') || 'No');
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('5, 5')