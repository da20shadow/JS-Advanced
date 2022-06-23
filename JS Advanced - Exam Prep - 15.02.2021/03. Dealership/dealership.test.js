const dealership = require('./dealership');
const {expect} = require('chai');

describe('dealership', () => {

    describe('Test newCarCost()', () => {

        it('should return 5000', function () {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });

        it('should return 50000', function () {
            expect(dealership.newCarCost('BMW B8', 50000)).to.equal(50000);
        });

    })

    describe('Test carEquipment()', () => {

        it('should return two three array', function () {
            let selectedExtras = ['two','three']
            expect(dealership.carEquipment(['one','two','three'],[1,2])).to.deep.equal(selectedExtras);
        });

        it('should return []', function () {
            let selectedExtras = []
            expect(dealership.carEquipment(['one','two','three'],[])).to.deep.equal(selectedExtras);
        });

    })

    describe('Test euroCategory()', () => {

        it('should return added 5% discount', function () {
            let msg = `We have added 5% discount to the final price: 14250.`;
            expect(dealership.euroCategory(4)).to.equal(msg);
        });
        it('should return added 5% discount', function () {
            let msg = `We have added 5% discount to the final price: 14250.`;
            expect(dealership.euroCategory(5)).to.equal(msg);
        });
        it('should return added 5% discount', function () {
            let msg = `Your euro category is low, so there is no discount from the final price!`;
            expect(dealership.euroCategory(3)).to.equal(msg);
        });

    })

})