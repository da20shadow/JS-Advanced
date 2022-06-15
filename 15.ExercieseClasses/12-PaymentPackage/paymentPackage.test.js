const PaymentPackage = require('./12PaymentPackage');
const { expect } = require('chai');

describe('Test the PaymentPackage class functionality', () => {

    let pack = new PaymentPackage('John',100);

    it('should instantiate the class correctly', function () {
        let testPack = new PaymentPackage('TestName',999);
        expect(testPack.name).to.be.equals('TestName');
        expect(testPack.value).to.be.equals(999);
        expect(testPack.VAT).to.be.equals(20);
        expect(testPack.active).to.be.equals(true);
    });

    it('should set and get the name correctly!', function () {
        pack.name = 'changedWithSet';
        expect(pack.name).to.be.equals('changedWithSet');
    });

    it('should set and get the value correctly!', function () {
        pack.value = 959;
        expect(pack.value).to.be.equals(959);
    });

    it('should set and get the VAT correctly!', function () {
        pack.VAT = 30;
        expect(pack.VAT).to.be.equals(30);
    });

    it('should set and get active correctly ', function () {
        pack.active = false;
        expect(pack.active).equals(false);
        pack.active = true;
        expect(pack.active).equals(true);
    });

    it('Should return a string as all the input is correct - 1', () => {
        let flagClass = new PaymentPackage('abc', 123);
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct - 2', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct - 3', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct - 4', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should throw error when the new Name is a number', () => {
        expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
    });

    it('Should throw error when the new Name is an array', () => {
        expect(() => new PaymentPackage(['abc'], 123)).to.throw('Name must be a non-empty string');
    });

    it('Should throw error when the new Name is empty', () => {
        expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
    });

    it('Should return the new Name if the input is good', () => {
        expect(() => new PaymentPackage('abc', 123)).not.to.throw('Name must be a non-empty string');
    });

    it('Should throw error when the new Value is a string', () => {
        expect(() => new PaymentPackage('abc', 'abc')).to.throw('Value must be a non-negative number');
    });

    it('Should throw error when the new Value is an array', () => {
        expect(() => new PaymentPackage('abc', [123])).to.throw('Value must be a non-negative number');
    });

    it('Should throw error when the new Value is negative', () => {
        expect(() => new PaymentPackage('abc', -123)).to.throw('Value must be a non-negative number');
    });

    it('Should return the new Value if the input is good', () => {
        expect(() => new PaymentPackage('abc', 123)).not.to.throw('Value must be a non-negative number');
    });

    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
    });

    it('Should throw error when the new VAT is a string', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
    });

    it('Should throw error when the new VAT is an array', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
    });

    it('Should throw error when the new VAT is negative', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
    });

    it('Should return the new VAT if the input is good', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.VAT = 123).not.to.throw('VAT must be a non-negative number');
    });

    it('Should throw error when the new Active is a string', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.active = 'abc').to.throw('Active status must be a boolean');
    });

    it('Should throw error when the new Active is an array', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.active = [123]).to.throw('Active status must be a boolean');
    });

    it('Should throw error when the new Active is negative', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.active = -123).to.throw('Active status must be a boolean');
    });

    it('Should return the new Active if the input is good', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.active = true).not.to.throw('Active status must be a boolean');
    });

})