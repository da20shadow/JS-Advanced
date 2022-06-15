const createCalculatorTest = require('./createCalculator');
const { expect } = require('chai');
const createCalculator = createCalculatorTest();

describe("Create calculator test ", () => {
    it("should return object with 3 functions add subtract and get", function () {
        expect(typeof createCalculator.add).to.be.equal("function");
        expect(typeof createCalculator.subtract).to.be.equal("function");
        expect(typeof createCalculator.get).to.be.equal("function");
        expect(typeof createCalculator).to.be.equal("object");
    });

    it("should return undefined when try to change the value outside", function () {
        expect(createCalculator.value).to.be.equal(undefined);
    });

    it("should parse the strings to integer and works correctly", () => {
        let func = createCalculatorTest();
        func.add(5);
        expect(func.get()).to.be.equal(5);
        func.subtract(3);
        expect(func.get()).to.be.equal(2);
        func.add("3");
        expect(func.get()).to.be.equal(5);
        func.subtract("5");
        expect(func.get()).to.be.equal(0);
    });
});