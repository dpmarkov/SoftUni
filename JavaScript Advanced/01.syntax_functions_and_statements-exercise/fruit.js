function fruit(fruit, weight, price) {
    weight = weight / 1000;
    let money = (weight * price).toFixed(2)
    console.log(`I need $${money} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit ('orange', 2500, 1.80)
fruit ('apple', 1563, 2.35)