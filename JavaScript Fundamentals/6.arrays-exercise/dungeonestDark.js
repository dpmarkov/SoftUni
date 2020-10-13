function dungeonestDark(str){
    let rooms = str[0].split('|');
    let health = 100;
    let coins = 0;    

    for(i=0; i<rooms.length; i++){
        let room = rooms[i].split(' ');
        let roomType = room[0];
        let roomNum = Number(room[1]);

        if (roomType == "potion"){
            let healingAmounth = 0;

            health += roomNum;
            if (health >= 100){
                healingAmounth = 100 + roomNum - health;
                health = 100;
            } else {
                healingAmounth = roomNum;
            }

            console.log(`You healed for ${healingAmounth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (roomType == "chest"){
            console.log(`You found ${roomNum} coins.`);
            coins += roomNum;
        } else {
            health  -= roomNum;
            if (health > 0){
                console.log(`You slayed ${roomType}.`);
            } else {
                console.log(`You died! Killed by ${roomType}.`);
                console.log(`Best room: ${i+1}`);
                i = rooms.length;
            }
        }
    }

    if (i == rooms.length & health > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}