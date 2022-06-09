const expect = require('chai').expect;
const subSumTest = require('./subSum');


describe('Test the subSum extractor function', () => {

    it('should return number', function () {
        let actualSum = subSumTest([10,20,30,40],1,3);
        expect(actualSum).to.be.a('number');
    });

    it('should return NaN', function () {
        expect(subSumTest(['sd','sdf'],1,2)).to.be.NaN;
    });

    it('should return 50 when ...', function () {
        //Arrange
        let expectedSum = 50;
        let numbers = [10,20,30,40,50,60];

        //Act
        let actualSum = subSumTest(numbers,1,3);

        //Assert
        expect(actualSum).to.equal(expectedSum);
    });
})