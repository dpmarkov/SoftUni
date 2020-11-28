function furniture(input) {
    let pattern = />>([a-zA-Z]+)<<([0-9]+\.?[0-9]*)!(\d+)/
    let line = input.shift();
    let totalSum = 0;

    console.log('Bought furniture:');

    while (line != 'Purchase'){
        if (pattern.test(line)){
            let values = line.match(pattern);
            let [, furniture, price, quantity] = values;

            console.log(furniture);

            totalSum += price * quantity;
        }
        
        line = input.shift();
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(
    [ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
)