const lookupChar = require('./lookupChar');
const { expect } = require('chai');

describe('Test LookupChar Func', () => {
    it('should return undefined if the first or second param is not a string or number', function () {
        expect(lookupChar(12,'done')).to.be.equal(undefined);
        expect(lookupChar(12,13)).to.be.equal(undefined);
        expect(lookupChar(undefined,1)).to.be.equal(undefined);
        expect(lookupChar(null,1)).to.be.equal(undefined);
        expect(lookupChar(null,'12')).to.be.equal(undefined);
        expect(lookupChar(undefined,'12')).to.be.equal(undefined);
        expect(lookupChar()).to.be.equal(undefined);
        expect(lookupChar('sas',1.4)).to.be.equal(undefined);
        expect(lookupChar('sas','1')).to.be.equal(undefined);
        expect(lookupChar('sas')).to.be.equal(undefined);
        expect(lookupChar(12)).to.be.equal(undefined);
        expect(lookupChar(undefined)).to.be.equal(undefined);
        expect(lookupChar(null)).to.be.equal(undefined);
        expect(lookupChar([])).to.be.equal(undefined);
        expect(lookupChar({})).to.be.equal(undefined);
        expect(lookupChar(['asd',12])).to.be.equal(undefined);
    });

    it('should return incorect index', function () {
        expect(lookupChar('done',-1)).to.be.equal('Incorrect index')
        expect(lookupChar('done',4)).to.be.equal('Incorrect index')
        expect(lookupChar('done',5)).to.be.equal('Incorrect index')
    });

    it('should return the char if all is correct', function () {
        expect(lookupChar('done',0)).to.be.equal('d');
        expect(lookupChar('done',3)).to.be.equal('e');
    });
})

//second solution
const { assert } = require('chai');
const lookupChar = require('./lookupChar');

describe('Char Lookup Tests', () => {
    it('should return "Incorrect index" if index is lower than zero', () => {
        assert.equal(lookupChar('string', -1), "Incorrect index");
    });

    it('should return undefined if second arg is not integer', () => {
        assert.equal(lookupChar('string', 1.5), undefined);
    });

    it('should return correct character', () => {
        assert.equal(lookupChar('string', 0), 's');
    });

    it('should return undefined if first arg is not string', () => {
        assert.equal(lookupChar(1, 1), undefined);
    });

    it('should return "Incorrect index" if index is bigger than string length', () => {
        assert.equal(lookupChar('string', 10), "Incorrect index");
    });
    it('should return correct character', () => {
        assert.equal(lookupChar('Pesho', 4), 'o');
    });

    it('should return undefined if second arg is not integer', () => {
        assert.equal(lookupChar('string', '3'), undefined);
    });
});
