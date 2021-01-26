function beehivePopulation(a, b){
    let population = Number(a);
    let years = Number(b);
    let newBees;
    let deadBees;
    let goingBees;

    for (i=1; i<=years; i++){
        newBees = Math.floor(population / 10) * 2;
        population += newBees;
        

        if(i % 5 == 0){
            goingBees = Math.floor(population / 50) * 5;
            population -= goingBees;
        }

        deadBees = Math.floor(population / 20) * 2;
        population -= deadBees;
    } 

    console.log(`Beehive population: ${population}`);
}
//beehivePopulation(100, 6);