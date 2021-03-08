const {expect} = require('chai');
const dealership = require('./dealership');

describe('Unit tests for dealership.js', () => {
    it('newCarCost', () => {
        const resA1 = dealership.newCarCost('Audi A4 B8', 20000);
        const resA2 = dealership.newCarCost('Audi', 20000);

        expect(resA1).to.be.equal(5000);
        expect(resA2).to.be.equal(20000);
    });
    it('carEquipment', () => {
        const resB1 = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], []);
        const resB2 = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1]);

        expect(resB1).to.be.empty;
        expect(resB2).to.have.same.members(['heated seats', 'sliding roof']);
    });
    it('euroCategory', () => {
        const resC1 = dealership.euroCategory(4);
        const resC2 = dealership.euroCategory(3);

        expect(resC1).to.be.equal('We have added 5% discount to the final price: 14250.');
        expect(resC2).to.be.equal('Your euro category is low, so there is no discount from the final price!');
    });
});