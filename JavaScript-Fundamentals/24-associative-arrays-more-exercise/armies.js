function armies(input) {
    let armies = {};

    for (let line of input){
        if (line.includes('arrives')){ //adds leader
            let leader = line.split(' arrives')[0];
            armies[leader] = {}
        } else if (line.includes(':')){ //add army
            let [leader, army] = line.split(': ');
            let [armyName, armyCount] = army.split(', ');
            armyCount = Number(armyCount);

            if (armies.hasOwnProperty(leader)){
                armies[leader][armyName] = armyCount;
            }
        } else if (line.includes('+')){ //add army count
            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);

            for (let leader of Object.keys(armies)){
                if (armies[leader].hasOwnProperty(armyName)){
                    armies[leader][armyName] += armyCount;
                    break;
                }
            }
        } else { //delete leader
            let leader = line.split(' defeated')[0];
            if (armies.hasOwnProperty(leader)){
                delete armies[leader];
            }
        }
    }

    let sorted = Object.entries(armies);

    for (let elm of sorted){
        let totalArmies = 0;
        let armiesArr = Object.values(elm[1]);

        for (let value of armiesArr){
            totalArmies += value;
        }

        elm.push(totalArmies);
    }
    
    sorted.sort((a, b) => b[2] - a[2]);

    for (let token of sorted){
        console.log(`${token[0]}: ${token[2]}`);
        
        let sorted2 = Object.entries(token[1]);
        sorted2.sort((a, b) => b[1] - a[1]);
        
        for (let value of sorted2){
            console.log(`>>> ${value[0]} - ${value[1]}`);
        }
    }
}

armies(
    ['Rick Burr arrives',
     'Fergus: Wexamp, 30245',
     'Rick Burr: Juard, 50000',
     'Findlay arrives',
     'Findlay: Britox, 34540',
     'Wexamp + 6000',
     'Juard + 1350',
     'Britox + 4500',
     'Porter arrives',
     'Porter: Legion, 55000',
     'Legion + 302',
     'Rick Burr defeated',
     'Porter: Retix, 3205']
)