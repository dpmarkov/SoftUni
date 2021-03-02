const { expect } = require('chai');
const pizzUni = require('./pizzaPlace');

describe('Unit Tests', () => {
    it('makeAnOrder-1', () => {
        expect(() => {
            pizzUni.makeAnOrder({ orderedDrink: 'Pepsi' })
        }).to.throw('You must order at least 1 Pizza to finish the order.');
    });

    it('makeAnOrder-2', () => {
        expect(pizzUni.makeAnOrder({ orderedPizza: 'Detroit Pizza', orderedDrink: 'Pepsi' }))
            .to.equal('You just ordered Detroit Pizza and Pepsi.');
    });

    it('makeAnOrder-3', () => {
        expect(pizzUni.makeAnOrder({ orderedPizza: 'Detroit Pizza' }))
            .to.equal('You just ordered Detroit Pizza');
    });

    it('getRemainingWork-1', () => {
        expect(pizzUni.getRemainingWork([{ pizzaName: 'Detroit Pizza', status: 'ready' }]))
            .to.equal('All orders are complete!');
    });

    it('getRemainingWork-2', () => {
        expect(pizzUni.getRemainingWork([{ pizzaName: 'Detroit Pizza', status: 'preparing' }]))
            .to.equal('The following pizzas are still preparing: Detroit Pizza.');
    });

    it('getRemainingWork-3', () => {
        expect(pizzUni.getRemainingWork([{ pizzaName: 'Detroit Pizza', status: 'preparing' }, { pizzaName: 'Greek Pizza', status: 'preparing' }]))
            .to.equal('The following pizzas are still preparing: Detroit Pizza, Greek Pizza.');
    });

    it('orderType-1', () => {
        let sum = 5 - 5 * 0.1;
        expect(pizzUni.orderType(5, 'Carry Out'))
            .to.equal(sum);
    });

    it('orderType-2', () => {
        expect(pizzUni.orderType(5, 'Delivery'))
            .to.equal(5);
    });
});
