const { expect } = require('chai');
const sum = require('./sumOfNnumbers');

describe('Sum numbers', () => {
    it('sums single number', ()=> {
        expect(sum([1])).to.equal(1);
    });

    it('sums multiple numbers', ()=> {
        expect(sum([1, 1])).to.equal(2);
    });

    it('sums multiple numbers', ()=> {
        expect(sum([2, 3, 7])).to.equal(12);
    });
});