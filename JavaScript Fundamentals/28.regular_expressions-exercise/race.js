function race(input) {
    let participantsArr = input.shift().split(', ');
    let participants = {}

    for (let key of participantsArr){
        participants[key] = 0;
    }

    let line = input.shift();

    while (line != 'end of race'){
        let name = "";
        let distance = 0;

        for (let char of line){
            let pattern1 = /[A-Za-z]/;
            let pattern2 = /[0-9]/;

            if (pattern1.test(char)){
                name += char;
            } else if (pattern2.test(char)){
                distance += Number(char);
            }
        }

        if (participantsArr.includes(name)){
            participants[name] += distance;
        }

        line = input.shift();
    }

    let sorted = Object.entries(participants);

    sorted.sort((a, b) => b[1]-a[1]);

    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`);
}

race(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
)