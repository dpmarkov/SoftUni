function cardGame(input) {
    let people = new Map();

    for (let line of input){
        let [person, cards] = line.split(': ');
        cards = cards.split(', ');
     
        if (!people.has(person)){
            people.set(person, cards);
        } else {
            let existingCards = people.get(person);
            let allCards = existingCards.concat(cards)
            people.set(person, allCards);
        }
    }

    for (let keys of people){
        let person = keys[0];
        let cards = keys[1];

        let uniqCards = new Set();
        for (let card of cards){
            uniqCards.add(card);
        }

        let points = 0;
        for (let card of uniqCards.values()){
            let power = card[0];
    
            switch (power) {
                case "1":
                    power = 10;
                    break;
                case "J":
                    power = 11;
                    break;
                case "Q":
                    power = 12;
                    break;
                case "K":
                    power = 13;
                    break;
                case "A":
                    power = 14;
                    break;
            }
            power = Number(power);
    
            let type = card[card.length-1];
    
            switch (type) {
                case "S":
                    type = 4;
                    break;
                case "H":
                    type = 3;
                    break;
                case "D":
                    type = 2;
                    break;
                case "C":
                    type = 1;
                    break;
            }
            type = Number(type)
    
            points += power * type;
        }

        console.log(`${person}: ${points}`);
    } 
}

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]    
)