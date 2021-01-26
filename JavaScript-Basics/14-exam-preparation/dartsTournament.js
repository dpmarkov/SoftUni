function dartsTournament(input){
    let index = 0;
    let points = Number (input[index]);
    index++;
    let isBullseye = false;
    let counter = 0;

    while (points > 0){
        let sector = input[index];
        index++;
        let score = Number(input[index]);
        index++;

        switch (sector) {
            case "number section":
                points -= score;
                break;
            case "double ring":
                points -= score * 2;
                break;
            case "triple ring":
                points -= score * 3;
                break;
            case "bullseye":
                isBullseye = true;
                break;
        }
        if (isBullseye){
            counter++;
            break;
        }
        counter++;
    }
    if (points == 0){
        console.log(`Congratulations! You won the game in ${counter} moves!`)
    } else if (isBullseye){
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
    } else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
    }
}
// dartsTournament([
//     '150',
//     'double ring',
//     '20',
//     'triple ring',
//     '10',
//     'number section',
//     '20',
//     'triple ring',
//     '20'
//   ]
//   );