function examPreparation(input){
    let maxUnsatisfiedGrades = Number(input.shift());
    let currentExam = input.shift();
    let currentGrade = Number(input.shift());
    let passedExams = 0;
    let lastExam = "";
    let sumAllGrades = 0;
    let unsatisfiedGrades = 0;

    while((currentExam !== "Enough") && (unsatisfiedGrades < maxUnsatisfiedGrades)){
        passedExams++;
        lastExam = currentExam;
        sumAllGrades += currentGrade;

        if (currentGrade <= 4){
            unsatisfiedGrades++;
        }

        currentExam = input.shift();
        currentGrade = Number(input.shift());
    }

    if (currentExam === "Enough"){
        let averageScore = sumAllGrades / passedExams;

        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${passedExams}`);
        console.log(`Last problem: ${lastExam}`);
    } else {
        console.log(`You need a break, ${unsatisfiedGrades} poor grades.`);
    }
}