function summerShopping(input){
    let budget = Number(input[0]);
    let beachTowel = Number(input[1]);
    let discount = Number(input[2]);
    let priceUmbrella = beachTowel - beachTowel / 3;
    let priceFlipflops = priceUmbrella * 0.75;
    let priceBeachBag = (beachTowel + priceFlipflops) / 3;

    let sum = beachTowel + priceUmbrella + priceBeachBag + priceFlipflops;
    let totalSum = sum - sum / 100 * discount;
    let diff = Math.abs(totalSum - budget);

    if(budget >= totalSum){
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`)
    }
}