function cruiseGames(input){
    let index = 0;
    let name = input[index];
    index++;
    let countGame = Number(input[index]);
    index++;
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;
    let counterVolleyball = 0;
    let counterTennis = 0;
    let counterBadminton = 0;

    for (i = 0; i < countGame; i++){
        let gameName = input[index];
        index++;
        let score = Number(input[index]);
        index++;

        switch(gameName){
            case "volleyball": 
                volleyballPoints += score * 1.07;
                counterVolleyball++;
                break;
            case "tennis":
                tennisPoints += score * 1.05;
                counterTennis++;
                break;
            case "badminton":
                badmintonPoints += score * 1.02;
                counterBadminton++;
                break;
        }
    }
    let averageVolleyBallPoints = Math.floor(volleyballPoints / counterVolleyball);
    let averageTennisPoints = Math.floor(tennisPoints / counterTennis);
    let averageBadmintonPoints = Math.floor(badmintonPoints / counterBadminton);

    let totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);

    if(averageBadmintonPoints >= 75 && averageTennisPoints >= 75 && averageVolleyBallPoints >= 75){
        console.log(`Congratulations, ${name}! You won the cruise games with ${totalPoints} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${totalPoints}.`);
    }
}