const companyAdministration = require('./companyAdministration');
const {expect} = require('chai');

describe('Test company Administration', () => {

    describe('Test hiringEmployee() method', () => {

        it('should throw error', function () {
            let err = 'We are not looking for workers for this position.';
            expect(() => companyAdministration.hiringEmployee('Mehmed', 'Boss', 5)).to.throw(Error, err)
        });

        it('should return successfully hired Programmer', function () {
            let msgExp = 'Mehmed was successfully hired for the position Programmer.';
            expect(companyAdministration.hiringEmployee('Mehmed', 'Programmer', 3)).to.be.equal(msgExp);
        });

        it('should return not approved', function () {
            let msgExp = 'Mehmed is not approved for this position.';
            expect(companyAdministration.hiringEmployee('Mehmed', 'Programmer', 1)).to.be.equal(msgExp);
        });
    });

    describe('Test calculateSalary method', () => {

        it('should throw error when type of hours is not a number', function () {
            let err = 'Invalid hours';
            expect(() => companyAdministration.calculateSalary('12')).to.throw(Error, err);
        });

        it('should throw error when hours is not a positive number', function () {
            let err = 'Invalid hours';
            expect(() => companyAdministration.calculateSalary(-15)).to.throw(Error, err);
        });

        it('should return 150 when 10 hours', function () {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
        });

        it('should return 150 when 100 hours', function () {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });

    describe('Test firedEmployee', () => {
        it('should throw error when employees is not array', function () {
            let err = 'Invalid input';
            expect(()=> companyAdministration.firedEmployee('Mehmed',0)).to.throw(Error,err);
        });

        it('should throw error when index is not a number', function () {
            let err = 'Invalid input';
            expect(()=> companyAdministration.firedEmployee(['Mehmed'],'0')).to.throw(Error,err);
        });

        it('should throw error when index is less than zero', function () {
            let err = 'Invalid input';
            expect(()=> companyAdministration.firedEmployee(['Mehmed'],-1)).to.throw(Error,err);
        });

        it('should throw error when index is greater than length', function () {
            let err = 'Invalid input';
            expect(()=> companyAdministration.firedEmployee(['Mehmed'],2)).to.throw(Error,err);
        });

        it('should throw error when index is equal length', function () {
            let err = 'Invalid input';
            expect(()=> companyAdministration.firedEmployee(['Mehmed'],1)).to.throw(Error,err);
        });

        it('should return employees', function () {
            let employees = ['John','Peter','Maria','Doe'];
            let msg = 'John, Peter, Maria';
            expect(companyAdministration.firedEmployee(employees,3)).to.equal(msg);
        });
    })

})