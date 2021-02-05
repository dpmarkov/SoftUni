const {expect} = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('Check for Symmetric', () => {
    it('returns true with valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('returns false with non-symmetric input', () => {
        expect(isSymmetric([2, 1])).to.be.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    //test overloading
    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });

    it('returns false for invalid symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('returns false for type-coerced elements', () => {
        expect(isSymmetric(['5', 5])).to.be.false;
    });
});