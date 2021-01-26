function arenaTier(input) {
    let gladiators = {}

    for (let line of input){
        if (line.includes(" -> ")){
            let [gladiator, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(gladiator)){
                gladiators[gladiator] = {
                    [technique]: skill
                }
            } else {
                if (!gladiators[gladiator].hasOwnProperty(technique)){
                    gladiators[gladiator][technique] = skill;
                } else {
                    if (gladiators[gladiator][technique] < skill){
                        gladiators[gladiator][technique] = skill;
                    }
                }
            }
        } else if (line.includes(" vs ")){
            let [gladiatorA, gladiatorB] = line.split(" vs ");

            if (gladiators.hasOwnProperty(gladiatorA) && gladiators.hasOwnProperty(gladiatorB)){
                commonTechniques = [];

                for (let technique of Object.keys(gladiators[gladiatorA])){
                    if (Object.keys(gladiators[gladiatorB]).includes(technique)){
                        commonTechniques.push(technique);
                    }
                }

                if (commonTechniques.length > 0){
                    gladiatorASkills = 0;
                    gladiatorBSkills = 0;

                    for (let technique of Object.keys(gladiators[gladiatorA])){
                        gladiatorASkills += gladiators[gladiatorA][technique];
                    }

                    for (let technique of Object.keys(gladiators[gladiatorB])){
                        gladiatorBSkills += gladiators[gladiatorB][technique];
                    }

                    if (gladiatorASkills > gladiatorBSkills){
                        delete gladiators[gladiatorB];
                    } else if (gladiatorASkills < gladiatorBSkills){
                        delete gladiators[gladiatorA];
                    }
                }                
            }
        } else { //'Ave Cesar'
            break;
        }
    }

    let sorted = Object.entries(gladiators);
    sorted.sort(function(a, b){
        let totalSkillsA = 0;
        let totalSkillsB = 0;

        for (let skill of Object.values(a[1])){
            totalSkillsA += skill;
        }

        for (let skill of Object.values(b[1])){
            totalSkillsB += skill;
        }

        if (totalSkillsB - totalSkillsA == 0){
            return a[0].localeCompare(b[0]);
        } else {
            return totalSkillsB - totalSkillsA;
        }
    })

    for (let tokens of sorted){
        let skills = 0;

        for (let skill of Object.values(tokens[1])){
            skills += skill;
        }

        console.log(`${tokens[0]}: ${skills} skill`);

        let sorted2 = Object.entries(tokens[1]);
        sorted2.sort(function(a, b){
            if (a[1] - b[1] == 0){
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        })

        for (let tokens2 of sorted2){
            console.log(`- ${tokens2[0]} <!> ${tokens2[1]}`);
        }
    }
}

arenaTier(
    [
        'Leonidas -> Kick -> 1000',
        'Ave Cesar',
        'Leonidas -> Roar -> 500'
    ]
)

console.log("-----------------");

arenaTier(
    [
        'Peter -> BattleCry -> 400',
        'Alex -> PowerPunch -> 300',
        'Stefan -> Duck -> 200',
        'Stefan -> Tiger -> 250',
        'Ave Cesar'
    ]        
)

console.log("-----------------");

arenaTier(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Leonidas -> Roar -> 500',
        'Leonidas -> Kick -> 1000',
        'Ave Cesar'
    ]               
)