const { expect } = require('chai');
const numberOperations = require('./numberOperations');

describe('Unit Tests', () => {
    // it('test name', () => {
    //     expect(() => {
    //         //..some code
    //     }).to.throw('error message');
    // });

    // it('test name', () => {
    //     expect(
    //         //..some code
    //     ).to.equal('result');
    // });

    // it('test name', () => {
    //     expect(
    //         //..some code
    //     ).to.deep.equal('result');
    // });

    it('test1', () => {
        expect(
            numberOperations.powNumber(2)
        ).to.equal(4);
    });

    it('numberChecker', () => {
        expect(
            () => {numberOperations.numberChecker('dd')}
        ).to.throw('The input is not a number!');
    });

    it('numberChecker', () => {
        expect(
            numberOperations.numberChecker(1)
        ).to.equal('The number is lower than 100!');
    });

    it('numberChecker', () => {
        expect(
            numberOperations.numberChecker(100)
        ).to.equal('The number is greater or equal to 100!');
    });

    it('numberChecker', () => {
        expect(
            numberOperations.numberChecker(101)
        ).to.equal('The number is greater or equal to 100!');
    });

    it('sumArrays', () => {
        expect(
            numberOperations.sumArrays([2, 4], [1, 1])
        ).to.deep.equal([3, 5]);
    });

    it('sumArrays', () => {
        expect(
            numberOperations.sumArrays([2, 4], [1, 1, 3])
        ).to.deep.equal([3, 5, 3]);
    });

    it('sumArrays', () => {
        expect(
            numberOperations.sumArrays([2, 4, 5], [1, 1])
        ).to.deep.equal([3, 5, 5]);
    });
});