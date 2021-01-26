function schoolGrades (input){
    let students = {}

    for (let line of input){
        line = line.split(' ');
        let student = line.shift();
        let grades = line.map(Number);

        if (!students.hasOwnProperty(student)){
            students[student] = [];
        }

        for (let grade of grades){
            students[student].push(grade);
        }
    }

    let sorted = Object.entries(students);
    sorted.sort(function(a, b){
        let gradesA = 0;
        let gradesB = 0;

        for (let grade of a[1]){
            gradesA += grade;
        }

        for (let grade of b[1]){
            gradesB += grade;
        }

        let avgA = gradesA / a[1].length;
        let avgB = gradesB / b[1].length;

        return avgA-avgB;
    });

    for (let key of sorted){
        console.log(`${key[0]}: ${key[1].join(', ')}`);   
    }
}

schoolGrades(
    ['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6',
    'Bob 6',
    'Joshua 2 3 2 2']
)