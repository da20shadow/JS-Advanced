const sumOfNumbersTest = require('./sumOfNumbers');
const { expect } = require('chai');

describe('Test The function sumOfNumbers', () => {
    it('should return 15', function () {
        let arr = [1,2,3,4,5];
        expect(sumOfNumbersTest(arr)).to.equal(15);
    });

    it('should return NaN when invalid input is given', function () {
        expect(sumOfNumbersTest('a')).to.NaN;
    });

    it('should return NaN when invalid input is given', function () {
        expect(sumOfNumbersTest([])).to.equal(0);
    });
})