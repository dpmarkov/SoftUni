function graduation2(input){
    name = input[0];
    let index = 1;
    let sum = 0;
    let excluded = 0;
    let excludedClass = 0;

    while(index <= input.length-1){
        if (input[index] < 4){
            excluded++;
        }
        if (excluded == 2){
            excludedClass = index-1;
        }
        sum += Number(input[index]);
        index++;
    }
    if (excluded >= 2){
        console.log(`${name} has been excluded at ${excludedClass} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sum/12).toFixed(2)}`);
    }
}
graduation2([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ]);
graduation2([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]);