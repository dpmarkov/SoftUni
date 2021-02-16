function solve(arr) {
    const juices = {};
    const order = []

    for (let item of arr){
        let [name, quantity] = item.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += quantity;

        if (juices[name] >= 1000) {
            if (!order.includes(name)){
                order.push(name);
            }
        }
    }

    for (let fruit of order){
        let bottles = Math.floor(juices[fruit] / 1000);
        console.log(`${fruit} => ${bottles}`);
    }
}

solve(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
);

console.log('\n---\n');

solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
);