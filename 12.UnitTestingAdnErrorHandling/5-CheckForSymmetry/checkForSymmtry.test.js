const isSymmetryFunc = require('./checkForSymmetry');
const { expect } = require('chai');

describe('Test for symmetry', () => {
    it('should return false when param is not array', function () {
        expect(isSymmetryFunc('asd')).to.be.false;
    });

    it('should return false when the input is incorrect type!', function () {
        expect(isSymmetryFunc({})).to.be.false;
        expect(isSymmetryFunc(1)).to.be.false;
        expect(isSymmetryFunc('assa')).to.be.false;
        expect(isSymmetryFunc(null)).to.be.false;
        expect(isSymmetryFunc(undefined)).to.be.false;
        expect(isSymmetryFunc([1,2,2,'1'])).to.be.false;
    });

    it('should return false if no input', function () {
        expect(isSymmetryFunc()).to.be.false;
    });

    it('should return true if array is symmetric', function () {
        expect(isSymmetryFunc([1,2,2,1])).to.be.true;
    });

    it('should return true if array is symmetric', function () {
        expect(isSymmetryFunc([1,2,1,1])).to.be.false;
    });

    it('should return true if array is symmetric', function () {
        expect(isSymmetryFunc([1,2,1])).to.be.true;
    });

    it('should return true if array of strings is symmetric', function () {
        expect(isSymmetryFunc(['1','2','2','1'])).to.be.true;
    });

    it('should return true if array is empty', function () {
        expect(isSymmetryFunc([])).to.be.true;
    });

    it('should return false if array not symmetric', function () {
        expect(isSymmetryFunc([1,2,3])).to.be.false;
    });
})