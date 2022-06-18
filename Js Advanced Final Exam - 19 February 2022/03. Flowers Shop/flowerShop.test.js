const flowerShop = require('./flowerShop');
const {expect} = require('chai');

describe('Test flowerShop ', function () {

    describe('Test calcPriceOfFlowers() method', () => {

        it('should throw error when flower is not string type', function () {
            expect(() => flowerShop.calcPriceOfFlowers(12, 9, 1)).to.throw('Invalid input!');
        });

        it('should throw error when price is not a number type', function () {
            expect(() => flowerShop.calcPriceOfFlowers('Daisy', '9', 1)).to.throw('Invalid input!');
        });

        it('should throw error when price is not a number type', function () {
            expect(() => flowerShop.calcPriceOfFlowers('Daisy', 9, '1')).to.throw('Invalid input!');
        });

        it('should return correct result', function () {
            let msg = 'You need $20.00 to buy Daisy!';
            expect(flowerShop.calcPriceOfFlowers('Daisy', 10, 2)).to.equal(msg);
        });


    })

    describe('Test checkFlowersAvailable() method', () => {

        it('should return the flower are available!', function () {
            let expMsg = 'The Daisy are available!';
            expect(flowerShop.checkFlowersAvailable('Daisy', ['Margaritka', 'Daisy'])).to.equal(expMsg);
        });

        it('should return that the flower are sold', function () {
            let message = 'The Daisy are sold! You need to purchase more!';
            expect(flowerShop.checkFlowersAvailable('Daisy', [])).to.equal(message);
        });


    })

    describe('Test sellFlowers() method', () => {

        it('should throw error when gardenArr is not an array', function () {
            let err = 'Invalid input!';
            expect(()=> flowerShop.sellFlowers('gardenr',12)).to.throw(Error,err);
        });

        it('should throw error when space is not a number', function () {
            let err = 'Invalid input!';
            expect(()=> flowerShop.sellFlowers(['Daisy'],'12')).to.throw(Error,err);
        });

        it('should throw error when space is less than zero', function () {
            let err = 'Invalid input!';
            expect(()=> flowerShop.sellFlowers(['Daisy'],-9)).to.throw(Error,err);
        });

        it('should throw error when space is greater than gardenArr length', function () {
            let err = 'Invalid input!';
            expect(()=> flowerShop.sellFlowers(['Daisy'],9)).to.throw(Error,err);
        });

        it('should throw error when space is equal than gardenArr length', function () {
            let err = 'Invalid input!';
            expect(()=> flowerShop.sellFlowers(['Daisy'],1)).to.throw(Error,err);
        });

        it('should work correctly', function () {
            let arrExp = 'Daisy / Daffodil';
            expect(flowerShop.sellFlowers(['Daisy','Daffodil','OneMore'],2)).to.equal(arrExp);
        });
    })

})