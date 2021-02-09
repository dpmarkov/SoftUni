const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('Unit test for mathEnforcer.js', () => {
    it('test addFive method; returns 5 if argument is 0', () => {
        expect(mathEnforcer.addFive(0)).to.equal(5);
    });

    it('test addFive method; returns 3 if argument is negative number (-2)', () => {
        expect(mathEnforcer.addFive(-2)).to.equal(3);
    });

    it('test addFive method; floating-point number as argument', () => {
        expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
    });

    it('test addFive method; returns undefined if argument is not a number (string test)', () => {
        expect(mathEnforcer.addFive('0')).to.be.undefined;
    });

    it('test addFive method; returns undefined if argument is not a number (string test 2)', () => {
        expect(mathEnforcer.addFive('g')).to.be.undefined;
    });

    it('test subtractTen method; returns 5 if argument is 15', () => {
        expect(mathEnforcer.subtractTen(15)).to.equal(5);
    });

    it('test subtractTen method; returns -13 if argument is -3', () => {
        expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
    });

    it('test subtractTen method; floating-point number as argument', () => {
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
    });

    it('test subtractTen method; returns undefined if argument is not a number (string test)', () => {
        expect(mathEnforcer.subtractTen('0')).to.be.undefined;
    });

    it('test subtractTen method; returns undefined if argument is not a number (string test 2)', () => {
        expect(mathEnforcer.subtractTen('g')).to.be.undefined;
    });

    it('test sum method; returns undefined if argument 1 is not a number (string test)', () => {
        expect(mathEnforcer.sum('0', 2)).to.be.undefined;
    });

    it('test sum method; returns undefined if argument 2 is not a number (string test)', () => {
        expect(mathEnforcer.sum(2, '0')).to.be.undefined;
    });

    it('test sum method; returns 5 if arguments are 2 and 3', () => {
        expect(mathEnforcer.sum(2, 3)).to.equal(5);
    });

    it('test sum method; returns 10 if arguments are -5 and 15', () => {
        expect(mathEnforcer.sum(-5, 15)).to.equal(10);
    });

    it('test sum method; floating-point numbers as arguments', () => {
        expect(mathEnforcer.sum(2.5, 4.5)).to.equal(7);
    });
});