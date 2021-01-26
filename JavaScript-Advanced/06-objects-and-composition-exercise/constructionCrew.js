function constructionCrew(objInput) {
    if (objInput.dizziness){
        objInput.levelOfHydrated += objInput.weight * objInput.experience / 10;

        objInput.dizziness = false;
    }

    return objInput;
}

let result1 = constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);
console.log(result1);
console.log('---');
let result2 = constructionCrew(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
);
console.log(result2);
console.log('---');
let result3 = constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
);
console.log(result3);