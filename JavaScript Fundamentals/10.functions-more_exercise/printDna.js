function printDna (n){
    function dnaMod(letter1, letter2, step){
        if (step == 1){
            return `**${letter1}${letter2}**`;
        } else if (step == 2 || step == 4){
            return `*${letter1}--${letter2}*`;
        } else { //step 3
            return `${letter1}----${letter2}`;
        }
    }

    let letters = [
        ["A", "T"],
        ["C", "G"],
        ["T", "T"],
        ["A", "G"],
        ["G", "G"],
    ];

    let currentStep = 1;
    let couple = 0;
    
    for (i=0; i<n; i++){
        if (currentStep == 5){
            currentStep = 1;
        }

        if (couple == 5){
            couple = 0;
        }

        console.log(dnaMod(letters[couple][0], letters[couple][1], currentStep));

        currentStep++;
        couple++;
    }
}