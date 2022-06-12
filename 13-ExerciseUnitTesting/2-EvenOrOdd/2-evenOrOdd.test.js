const isOddOrEven = require('./2-evenOrOdd');
const { expect } = require('chai');

describe('Test isOddOrEven function', () => {
    it('should return undefined if the param is not a string', function () {
        expect(isOddOrEven(12)).to.be.equal(undefined);
        expect(isOddOrEven(null)).to.be.equal(undefined);
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
        expect(isOddOrEven({})).to.be.equal(undefined);
        expect(isOddOrEven([1,2,3])).to.be.equal(undefined);
        expect(isOddOrEven(['2','3'])).to.be.equal(undefined);
        expect(isOddOrEven()).to.be.equal(undefined);
    });

    it('should return even if the string length is 2', function () {
        expect(isOddOrEven('ad')).to.be.equal('even')
    });

    it('should return odd if the string length is 3', function () {
        expect(isOddOrEven('ads')).to.be.equal('odd')
    });

    it('should return odd if the string length is 3', function () {
        expect(isOddOrEven('adss')).to.be.equal('even')
        expect(isOddOrEven('adsse')).to.be.equal('odd')
        expect(isOddOrEven('adssed')).to.be.equal('even')
        expect(isOddOrEven('adssedr')).to.be.equal('odd')
    });

})