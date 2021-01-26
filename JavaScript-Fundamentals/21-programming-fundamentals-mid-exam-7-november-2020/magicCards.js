function magicCards (input){
    let cards = input.shift().split(':');
    let deck = [];
    let command = input.shift().split(' ');

    while (command[0] != "Ready"){
        if (command[0] == "Add"){
            let cardName = command[1];

            if (!cards.includes(cardName)){
                console.log("Card not found.");
            } else {
                deck[deck.length] = cardName;
            }
        } else if (command[0] == "Insert"){
            let cardName = command[1];
            let index = Number(command[2]);

            if (!cards.includes(cardName) || index < 0 || index >= deck.length){
                console.log("Error!");
            } else {
                deck.splice(index, 0, cardName);
            }
        } else if (command[0] == "Remove"){
            let cardName = command[1];

            if (!deck.includes(cardName)){
                console.log("Card not found.");
            } else {
                let index = deck.indexOf(cardName);
                deck.splice(index, 1);
            }
        } else if (command[0] == "Swap"){
            let cardName1 = command[1];
            let index1 = deck.indexOf(cardName1);
            let cardName2 = command[2];
            let index2 = deck.indexOf(cardName2);

            deck[index1] = cardName2;
            deck[index2] = cardName1;
        } else { //shuffle
            deck.reverse()
        }

        command = input.shift().split(' ');
    }
    
    console.log(deck.join(' '));
}

magicCards(
    ["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
    "Add Pop",
    "Add Exodia",
    "Add Aso",
    "Remove Wrath",
    "Add SineokBqlDrakon",
    "Shuffle deck",
    "Insert Pesho 0",
    "Ready"]
)