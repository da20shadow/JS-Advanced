const testNumbers = require('./testNumbers');
const {expect} = require('chai');

describe('TestNumbers object test', () => {

    describe('Test sumNumbers()', () => {

        it('should return undefined when num1 is not a number type', function () {
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        });

        it('should return undefined when num2 is not a number type', function () {
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
        });

        it('should return 4', function () {
            expect(testNumbers.sumNumbers(2, 2)).to.equal('4.00')
        });

    });

    describe('Test numberChecker)', () => {

        it('should throw error when the input is not a number', function () {
            const err = 'The input is not a number!'
            expect(() => testNumbers.numberChecker('asd')).to.throw(Error, err);
        });

        it('should return the number is even', function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('should return the number is even', function () {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    });

    describe('Test averageSumArray', () => {

        it('should return 3', function () {
            expect(testNumbers.averageSumArray([3,3,3])).to.equal(3);
        });

        it('should return 2.5', function () {
            expect(testNumbers.averageSumArray([2.5,2.5])).to.equal(2.5);
        });

    })
})