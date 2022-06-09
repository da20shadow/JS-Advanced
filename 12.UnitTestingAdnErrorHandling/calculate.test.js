const assert = require('assert').strict;
const calculateTest = require('./calculate');

describe('Test The Calculator with different operators + - *', () => {

    it('Should return sum 40 when operator is + and both numbers 20' , () => {

        //Arrange
        let firstNumber = 20;
        let operator = '+';
        let secondNumber = 20;
        let expectedSum = 40;

        //Act
        let actualSum = calculateTest(firstNumber, operator, secondNumber);

        //Assert
        assert.equal(actualSum, expectedSum);

    })

    it('Return sum 0 when subtract 2 equals numbers' , () => {

        //Arrange
        let firstNumber = 20;
        let operator = '-';
        let secondNumber = 20;
        let expectedSum = 0;

        //Act
        let actualSum = calculateTest(firstNumber, operator, secondNumber);

        //Assert
        assert.equal(actualSum, expectedSum);

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

