const assert = require('assert').strict;
const calculateTest = require('./calculate');

describe('Test The Calculator with different operators + - *', () => {

    it('should return false when check if the result is not a number', function () {
        assert.equal(isNaN(calculateTest(5,'*',9)),false);
    });

    it('should return false when check if the result is not a number', function () {
        assert.equal(isNaN(calculateTest('5','*','sd')),true);
    });

    it('Should return sum correct sum' , () => {
        assert.equal(calculateTest(20, "+", 30), 50);
        assert.equal(calculateTest(-20, "+", -20), -40);
        assert.equal(calculateTest(20, "+", -20), 0);
    })

    it('Should Return correct sum when subtract 2 numbers' , () => {
        assert.equal(calculateTest(30, "-", 20), 10);
        assert.equal(calculateTest(30, "-", -20), 50);
        assert.equal(calculateTest(-30, "-", -20), -10);
    })

    it('Should return sum -15 when subtract -20 + 5' , () => {

        //Arrange
        let firstNumber = -20;
        let operator = '+';
        let secondNumber = 5;
        let expectedSum = -15;

        //Act
        let actualSum = calculateTest(firstNumber, operator, secondNumber);

        //Assert
        assert.equal(actualSum, expectedSum);

    })

    it('Should return sum -25 when subtract -20 - 5' , () => {

        //Arrange
        let firstNumber = -20;
        let operator = '-';
        let secondNumber = 5;
        let expectedSum = -25;

        //Act
        let actualSum = calculateTest(firstNumber, operator, secondNumber);

        //Assert
        assert.equal(actualSum, expectedSum);

    })

    it('Should return sum 60 when multiply 20 x 3' , () => {

        //Arrange
        let firstNumber = 20;
        let operator = '*';
        let secondNumber = 3;
        let expectedSum = 60;

        //Act
        let actualSum = calculateTest(firstNumber, operator, secondNumber);

        //Assert
        assert.equal(actualSum, expectedSum);

    })
})

