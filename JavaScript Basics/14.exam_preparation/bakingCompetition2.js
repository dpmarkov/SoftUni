function bakingCompetition2(input){
    let people = Number(input[0]);
    let index = 1;
    let allBakery = 0;
    let totalSum = 0;

    for (let i = 1; i <= people; i++){
        let competitor = input[index];
        index++;
        let typeMeal = input[index];
        index++

        let waffles = 0;
        let cakes = 0;
        let cookies = 0;

        while(typeMeal != "Stop baking!"){
            if (typeMeal == "waffles"){
                waffles += Number(input[index]);
                allBakery += Number(input[index]);
            } else if (typeMeal == "cookies"){
                cookies += Number(input[index]);
                allBakery += Number(input[index]);
            } else {
                cakes += Number(input[index]);
                allBakery += Number(input[index]);
            }

            index++;
            typeMeal = input[index];
            index++;
        }
        console.log(`${competitor} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        totalSum += waffles * 2.30 + cookies * 1.50 + cakes * 7.80;
    }
    console.log(`All bakery sold: ${allBakery}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
bakingCompetition2([
    '3',            'Iva',
    'cookies',      '5',
    'cakes',        '3',
    'Stop baking!', 'George',
    'cakes',        '7',
    'waffles',      '2',
    'Stop baking!', 'Ivan',
    'cookies',      '6',
    'Stop baking!'
  ]
  )