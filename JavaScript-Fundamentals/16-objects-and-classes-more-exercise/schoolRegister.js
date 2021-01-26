function schoolRegister(arr) {
    students = []

    arr.forEach(element => {
        element = element.split(', ');
        let student = {}
        student.name = element[0].substr(14);
        let grade = Number(element[1].substr(7)) + 1;
        student.grade = grade;
        student.score = Number(element[2].substr(33));

        if (student.score >= 3){
            students.push(student);
        }
    });

    students.sort((a,b) => a.grade - b.grade);
    
    let currentGrade = students[0].grade;
    let studentsToPrint = []
    let studentsAverageScore = []
    let averageScore = 0;
    let index = 0;
    
    students.forEach(element => {
        index++

        if (index == students.length){
            if (element.grade != currentGrade){
                console.log(currentGrade + " Grade");

                console.log("List of students: " + studentsToPrint.join(', '));

                averageScore = 0;
                studentsAverageScore.forEach(score => {
                    averageScore += score;
                });
                averageScore = averageScore / (studentsAverageScore.length);
                
                console.log("Average annual grade from last year: " + averageScore.toFixed(2));
                console.log();

                studentsToPrint = [];
                studentsAverageScore = [];

                currentGrade = element.grade;
            }

            studentsToPrint.push(element.name);
            studentsAverageScore.push(element.score);

            console.log(currentGrade + " Grade");

            console.log("List of students: " + studentsToPrint.join(', '));

            averageScore = 0;
            studentsAverageScore.forEach(score => {
                averageScore += score;
            });
            averageScore = averageScore / (studentsAverageScore.length);
            
            console.log("Average annual grade from last year: " + averageScore.toFixed(2));
        } else if (element.grade == currentGrade){
            studentsToPrint.push(element.name);
            studentsAverageScore.push(element.score);
        } else {
            console.log(currentGrade + " Grade");
            console.log("List of students: " + studentsToPrint.join(', '));

            averageScore = 0;
            studentsAverageScore.forEach(score => {
                averageScore += score;
            });
            averageScore = averageScore / (studentsAverageScore.length);
            
            console.log("Average annual grade from last year: " + averageScore.toFixed(2));
            console.log();
            studentsToPrint = [];
            studentsAverageScore = [];

            currentGrade = element.grade;

            studentsToPrint.push(element.name);
            studentsAverageScore.push(element.score);
        }
    });
}

//test input
schoolRegister(
    ["Student name: Mark, Grade: 10, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 4.83"]
)