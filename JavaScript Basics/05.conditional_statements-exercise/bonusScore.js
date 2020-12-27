function bonusScore(x) {
    let score = Number(x);
    let bonusScore = 0;

    if (score <= 100) {
        bonusScore += 5;
    } else if (score <= 1000) {
        bonusScore += 0.2 * score;
    } else {
        bonusScore += 0.1 * score;
    }
    if (score%2==0) {
        bonusScore += 1;
    }
    if (score % 10 == 5) {
        bonusScore += 2;
    }
    console.log(bonusScore);
    console.log(bonusScore+score);
}
bonusScore("20");