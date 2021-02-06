const { expect } = require ('chai');
const lookupChar = require ('./lookupChar');

describe ('Lookup Char Unit Tests', () => {
    it ('returns the letter at 0 index of valid string', () => {
        expect(lookupChar('abcd', 0)).to.equal('a');
    });

    it ('returns the letter at 1 index of valid string', () => {
        expect(lookupChar('abcd', 1)).to.equal('b');
    });

    it ('returns the letter at 2 index of valid string', () => {
        expect(lookupChar('abcd', 2)).to.equal('c');
    });

    it ('returns the letter at 3 index of valid string', () => {
        expect(lookupChar('abcd', 3)).to.equal('d');
    });

    it ('returns undefined if the first parameter is NOT a string (number test) and the second is a valid number', () => {
        expect(lookupChar(5544, 2)).to.be.undefined;
    });

    it ('returns undefined if the first parameter is NOT a string (array test) and the second is a valid number', () => {
        expect(lookupChar(['2', '1', '0', '6'], 2)).to.be.undefined;
    });

    it ('returns undefined if the first parameter is NOT a string (object test) and the second is a valid number', () => {
        expect(lookupChar({2: ''}, 2)).to.be.undefined;
    });

    it ('returns undefined if the first parameter is NOT a string (boolean test) and the second is a valid number', () => {
        expect(lookupChar(true, 2)).to.be.undefined;
    });

    it ('returns undefined if the second parameter is NOT a number (string test) and the first is a valid string', () => {
        expect(lookupChar('aaabbbccc', '0')).to.be.undefined;
    });

    it ('returns undefined if the second parameter is NOT a number (string test 2) and the first is a valid string', () => {
        expect(lookupChar('aaabbbccc', 'a')).to.be.undefined;
    });

    it ('returns undefined if first parameter is valid but index is floating-point number', () => {
        expect(lookupChar('abc', 1.5)).to.be.undefined;
    });

    it ('returns a message if parameters are valid but index is incorrect (negative number)', () => {
        expect(lookupChar('aaabbbccc', -1)).to.be.equal('Incorrect index');
    });

    it ('returns a message if parameters are valid but index is incorrect (negative number 2)', () => {
        expect(lookupChar('aaabbbccc', -4)).to.be.equal('Incorrect index');
    });

    it ('returns a message if parameters are valid but index is incorrect (equals string\'s length)', () => {
        expect(lookupChar('aaabbbccc', 9)).to.be.equal('Incorrect index');
    });

    it ('returns a message if parameters are valid but index is incorrect (equals string\'s length)', () => {
        expect(lookupChar('abc', 3)).to.be.equal('Incorrect index');
    });

    it ('returns a message if parameters are valid but index is incorrect (bigger than string\'s length)', () => {
        expect(lookupChar('aaabbbccc', 15)).to.be.equal('Incorrect index');
    });
});