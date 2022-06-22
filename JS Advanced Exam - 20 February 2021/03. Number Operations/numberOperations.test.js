const numberOperations = require('./numberOperations');
const {expect} = require('chai');

describe('Test numberOperations', () => {

    describe('Test powNumber()', () => {

        it('should return 9', function () {
            expect(numberOperations.powNumber(3)).equal(9);
        });
        it('should return 6.25', function () {
            expect(numberOperations.powNumber(2.5)).equal(6.25);
        });

    });

    describe('Test numberChecker()', () => {

        it('should throw error when the input is not a number', function () {
            let errMsg = 'The input is not a number!';
            expect(()=>numberOperations.numberChecker('asd')).to.throw(Error,errMsg);
        });

        it('should throw error when the input is not a number', function () {
            let errMsg = 'The input is not a number!';
            expect(()=>numberOperations.numberChecker({})).to.throw(Error,errMsg);
        });

        it('should return the number is lower than 100!', function () {
            let msg = 'The number is lower than 100!';
            expect(numberOperations.numberChecker(99)).to.equal(msg);
        });

        it('should return the number is lower than 100!', function () {
            let msg = 'The number is greater or equal to 100!';
            expect(numberOperations.numberChecker(100)).to.equal(msg);
        });

        it('should return the number is lower than 100!', function () {
            let msg = 'The number is lower than 100!';
            expect(numberOperations.numberChecker('90')).to.equal(msg);
        });

        it('should return the number is greater or equal than 100!', function () {
            let msg = 'The number is greater or equal to 100!';
            expect(numberOperations.numberChecker(199)).to.equal(msg);
        });

    })

    describe('Test sumArrays()', () => {

        it('should return correct array', function () {
            let arr = [2,4,3];
            expect(numberOperations.sumArrays([1,2,3],[1,2])).to.deep.equal(arr)
        });

        it('should return correct array', function () {
            let arr = [2,4,6];
            expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal(arr)
        });

        it('should return correct array', function () {
            let arr = [6,7,3,5];
            expect(numberOperations.sumArrays([5,5],[1,2,3,5])).to.deep.equal(arr)
        });

    })
})