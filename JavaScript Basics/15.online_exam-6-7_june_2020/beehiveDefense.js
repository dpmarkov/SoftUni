function beehiveDefense(a, b, c){
    let bees = Number(a);
    let bearHealth = Number(b);
    let bearAttack = Number(c);

    let totalBeesAttack = bees * 5;

    while(true){
        bees -= bearAttack;
        totalBeesAttack = bees * 5;

        if (bees <= 0){
            console.log(`The bear stole the honey! Bees left 0.`);
            break;
        } else if (bees < 100){
            console.log(`The bear stole the honey! Bees left ${bees}.`);
            break;
        }

        bearHealth -= totalBeesAttack;

        if (bearHealth <= 0){
            console.log(`Beehive won! Bees left ${bees}.`);
            break;
        }
    }
}
//beehiveDefense("200", "1000", "10");