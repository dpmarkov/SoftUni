function honeyWinterReserves(input){
    let honeyForWinter = Number(input[0]);
    let allHoneyByBees = 0;
    let allHoneyByBee = 0;
    let honeyNeeded = 0;
    let beeName = input[1];
    let index = 2;
    let madeHoneyByBeeMonth = 0;

    while(beeName != "Winter has come"){
        for (i = 1; i <= 6; i++){
            madeHoneyByBeeMonth = Number(input[index]);
            index++;   
            allHoneyByBee += madeHoneyByBeeMonth;
        }
        

        allHoneyByBees += allHoneyByBee;
        if (allHoneyByBee < 0){
            console.log(`${beeName} was banished for gluttony`); 
        }
        if (allHoneyByBees >= honeyForWinter){
            break;
        }

        beeName = input[index];
        index++;
        allHoneyByBee = 0; 
    }
    if (allHoneyByBees >= honeyForWinter){
        console.log(`Well done! Honey surplus ${(allHoneyByBees - honeyForWinter).toFixed(2)}.`);
    } else {
        honeyNeeded = honeyForWinter - allHoneyByBees;
        console.log(`Hard Winter! Honey needed ${honeyNeeded.toFixed(2)}.`);
    } 
}
honeyWinterReserves([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come'
  ]);