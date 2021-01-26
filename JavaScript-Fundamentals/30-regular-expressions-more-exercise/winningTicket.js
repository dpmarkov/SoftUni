function winningTicket([input]) {
    let splitPattern = /[,\s]+/g
    let tickets = input.split(splitPattern);
    let winningPattern = /([@]{6,10}|[$]{6,10}|[#]{6,10}|[\^]{6,10})/

    for (let ticket of tickets){
        if (ticket.length == 20){
            let leftHalf = ticket.substring(0, 10);
            let rightHalf = ticket.substring(10);

            let leftResult = leftHalf.match(winningPattern);
            let rightResult = rightHalf.match(winningPattern);

            if (leftResult == null || rightResult == null){
                console.log(`ticket "${ticket}" - no match`);
            } else if (leftResult[0][0] == rightResult[0][0]){
                let winLength = Math.min(leftResult[0].length, rightResult[0].length);

                if (winLength == 10){
                    console.log(`ticket "${ticket}" - ${winLength}${leftResult[0][0]} Jackpot!`); 
                } else {
                    console.log(`ticket "${ticket}" - ${winLength}${leftResult[0][0]}`); 
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log('invalid ticket');
        }
    }
}

winningTicket(
    [ 'Cash$$$$$$Ca$$$$$$sh' ]
)

console.log('--------------');

winningTicket(
    [ '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey' ]
)

console.log('--------------');

winningTicket(
    [ 'validticketnomatch:(' ]
)

console.log('--------------');

winningTicket(
    [ '^^^^^^j^^^^^^jjjpppp , $$$$$$7777$$$$$$$$$$,$$$$$$$$$$@@@@@@@@@@,   @@th@@@@@@e@@m@@@@@@' ]
)

console.log('--------------');

winningTicket(
    [ '@@@@@@@@@@et@@@@@@@@,  $$$$$$$$$$##########' ]
)

console.log('--------------');

winningTicket(
    [ '$$$$$$$$##$$$$$$$$$$' ]
)