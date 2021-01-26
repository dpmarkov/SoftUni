function bonusScoringSystem (input){
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let maxBonus = 0;
    let index = 0;

    for (i=0; i<students; i++){
        let attendance = Number(input[i]);
        let total = attendance / lectures * (5 + bonus);
        
        if (total > maxBonus){
            maxBonus = total
            index = i;
        }
    }

    if (students == 0 || lectures == 0){
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    } else {
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
        console.log(`The student has attended ${input[index]} lectures.`);
    }
}

bonusScoringSystem(
    [
        '5',  '25', '30',
        '12', '19', '24',
        '16', '20'
      ]             
)

bonusScoringSystem(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
      ]
                
)