function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    
    let count = 1;
    let totalGrade = 0;
    while(count <= 12){
        let grade = Number(input[index]);
        index++;
        if(grade < 4.00){
            continue;
        }
        count++;
        totalGrade += grade;
    }
    console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`);
}