function bakingCompetition(input){
    let index = 0;
    let people = Number(input[index]);
    index++;
    let waffles = 0;
    let cakes = 0;
    let cookies = 0;
    let competitor = input[index];
    index++;
    let allBakery = 0;
    let totalWaffles = 0;
    let totalCakes = 0;
    let totalCookies = 0;
    let totalSum;

    for (let i = 1; i <= people; i++){
        while(input[index] != "Stop baking!"){
            if (input[index] == "waffles"){
                index++;
                waffles += Number(input[index]);
                totalWaffles += waffles;
            } else if (input[index] == "cookies"){
                index++;
                cookies += Number(input[index]);
                totalCookies += cookies;
            } else {
                index++;
                cakes += Number(input[index]);
                totalCakes += cakes;
            }
            index++;
        }
        console.log(`${competitor} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        
        waffles = 0;
        cakes = 0;
        cookies = 0;

        index++;
        competitor = input[index];
        index++; 
    }
    
    allBakery = totalCakes + totalCookies + totalWaffles;
    totalSum = totalWaffles * 2.30 + totalCookies * 1.50 + totalCakes * 7.80;

    console.log(`All bakery sold: ${allBakery}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
// bakingCompetition([
//     '3',            'Iva',
//     'cookies',      '5',
//     'cakes',        '3',
//     'Stop baking!', 'George',
//     'cakes',        '7',
//     'waffles',      '2',
//     'Stop baking!', 'Ivan',
//     'cookies',      '6',
//     'Stop baking!'
//   ]
//   )