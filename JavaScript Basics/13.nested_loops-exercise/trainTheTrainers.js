function trainTheTrainers(input){
    let index = 0;
    let juryCount = Number(input[index]);
    index++;

    let presentationName = input[index];
    index++;

    let finalAssenment = 0;
    let countGrade = 0;

    while(presentationName != "Finish"){
        let avarageGrade = 0;
        for (let i=0; i<juryCount; i++){
            let grade = Number(input[index]);
            index++;
            avarageGrade += grade;
            finalAssenment += grade;
            countGrade++;
        }
        console.log(`${presentationName} - ${(avarageGrade / juryCount).toFixed(2)}.`);
        presentationName = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(finalAssenment / countGrade).toFixed(2)}.`);
}