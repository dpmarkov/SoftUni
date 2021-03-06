class ChristmasDinner {
    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};

        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = budget;
    }

    get budget () {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = budget;
    }

    shopping([product, price]) {
        price = Number(price);

        if (price > this._budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(product);
        this._budget -= price;

        return `You have successfully bought ${product}!`;
    }

    recipes({ recipeName, productsList }) {
        let available = true;

        productsList.map(e => {
            if (!this.products.includes(e)) {
                available = false;
            }
        });

        if (available) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        for (let elm of this.dishes) {
            if (elm.recipeName == dish) {
                this.guests[name] = dish;
                return `You have successfully invited ${name}!`;
            }
        }

        throw new Error('We do not have this dish');
    }

    showAttendance() {
        let result = [];

        for (let guest in this.guests) {
            let dish = this.guests[guest];
            let products = this.dishes.find(e => e.recipeName == dish).productsList.join(', ');

            result.push(`${guest} will eat ${dish}, which consists of ${products}`);
        }

        return result.join('\n')
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.products);

const result1 = dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

const result2 = dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});

const result3 = dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(result1, result2, result3);
console.log(dinner.dishes);

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.guests);

console.log(dinner.showAttendance());