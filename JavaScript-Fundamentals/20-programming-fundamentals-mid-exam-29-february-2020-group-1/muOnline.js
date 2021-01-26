function muOnline (input){
    let health = 100;
    let bitcoins = 0;
    let roomNum = 0;
    let isDead = false;

    rooms = input.split('|');
    for (let command of rooms){
        command = command.split(' ');
        roomNum++;

        if (command[0] == "potion"){
            let healing = Number(command[1]);

            if (health + healing > 100){
                healing = 100 - health;
                health = 100;
            } else {
                health += healing;
            }

            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command[0] == "chest"){
            let amount = Number(command[1]);
            bitcoins += amount;
            console.log(`You found ${amount} bitcoins.`);
        } else { //it's a monster
            let attack = Number(command[1]);
            health -= attack;

            if (health > 0) {
                console.log(`You slayed ${command[0]}.`);  
            } else { //dead
                isDead = true;
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${roomNum}`);
                break;
            }
        }
    }

    if (roomNum == rooms.length && isDead == false){
        console.log(`You've made it!
Bitcoins: ${bitcoins}
Health: ${health}`); 
    }
}

muOnline(
    'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70'
)