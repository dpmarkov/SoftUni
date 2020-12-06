function softuniBarIncome(input) {
    let line = input.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%(.*)<(?<product>\w+)>(.*)\|[^0-9\|]*(?<quantity>\d+)\|[^0-9]*(?<price>\d+(\.\d+)?)\$/;
    let total = 0;

    while (line != 'end of shift'){
        if (pattern.test(line)){
            let match = line.match(pattern);
            let sum = match['groups']['quantity'] * match['groups']['price'];

            console.log(`${match['groups']['name']}: ${match['groups']['product']} - ${sum.toFixed(2)}`);

            total += sum;
        }

        line = input.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softuniBarIncome(
    [
        '%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
)

console.log('\n------------------\n');

softuniBarIncome(
    [
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
    ]
)