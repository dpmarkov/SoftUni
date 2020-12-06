function netherRealms([input]) {
    let creatures = [];
    let splitPattern = /[,\s]+/g
    let numbersPattern = /[+-]?[0-9]+(\.[0-9]+)?/g
    let healthPattern = /[^0-9\+\-\*\/\.]/
    

    for (let creature of input.split(splitPattern)){
        let health = 0;
        let multiply = 0;
        let divide = 0;
        let damage = 0;
    
        for (let char of creature){
        //calculate health-------------------------------
            if (healthPattern.test(char)){
                health += char.charCodeAt(0);
            }
        //-------------------------------calculate health
        
    //calculate damage-------------------------------
            if (char == "*"){
                multiply++
            } else if (char == "/"){
                divide++
            }
        }

        if (numbersPattern.test(creature)){
            let allNumbers = creature.match(numbersPattern);

            for (let number of allNumbers){
                damage += Number(number);
            }
        
            for (let i=0; i<multiply; i++){
                damage = damage * 2;
            }

            for (let i=0; i<divide; i++){
                damage = damage / 2;
            }
        }
        
    //-------------------------------calculate damage

        creatures.push(
            {
                creature,
                health,
                damage
            }
        );
    }

    creatures.sort((a, b) => a['creature'].localeCompare(b['creature']));
    
    for (let creature of creatures){
        console.log(`${creature['creature']} - ${creature['health']} health, ${creature['damage'].toFixed(2)} damage`);
    }
}

netherRealms(
    [ 'M3ph-0.5s-0.5t0.0**' ]
)

console.log('\n---------------------------\n');

netherRealms(
    [ 'M3ph1st0**, Azazel' ]
)

console.log('\n---------------------------\n');

netherRealms(
    [ 'Gos/ho' ]
)