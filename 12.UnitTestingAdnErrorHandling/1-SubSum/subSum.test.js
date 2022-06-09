const subSumTest = require('./subSum');
const {expect} = require("chai");

describe('Test the subSum function', function () {


    it('should return 30 ', function () {
        let numArr = [10,20,30,40,50];
        let expectedSum = 30;
        expect(subSumTest(numArr,0,1)).to.equal(expectedSum);
    });

    it('should return NaN', function () {
        expect(subSumTest(10,1,2)).to.NaN;
        expect(subSumTest([10,'twenty',15],1,2)).to.NaN;
        expect(subSumTest({},1,2)).to.NaN;
        expect(subSumTest(" ",1,2)).to.NaN;
        expect(subSumTest(null,1,2)).to.NaN;
        expect(subSumTest(undefined,1,2)).to.NaN;
    });

    it('should return zero', function () {
        expect(subSumTest([],1,2)).to.equal(0);
    });

    it('should return 3.3 when put negative start index', function () {
        let numArr = [1.1,2.2,3.3,4.4,5.5];
        expect(subSumTest(numArr,-3,1)).to.equal(3.3);
    });
})