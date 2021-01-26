function buildAWall(arr){
    arr.map(Number);
    let crews = arr.length;
    let dailyUsedConcrete = []

    for (i=0; i<crews; i++){
        let currentHeight = arr[i];
        let day = 0;

        while (currentHeight < 30){
            currentHeight++
            
            if (dailyUsedConcrete[day] != undefined){
                dailyUsedConcrete[day] += 195;
            } else {
                dailyUsedConcrete[day] = 195;
            }
            
            day++
        }
    }

    console.log(dailyUsedConcrete.join(", "));

    let totalConcrete = 0;
    for (k=0; k<dailyUsedConcrete.length; k++){
        totalConcrete += dailyUsedConcrete[k];
    }

    let costOfWall = totalConcrete * 1900;

    console.log(costOfWall + " pesos");
}