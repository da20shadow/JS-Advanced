const rentCar = require('./rentCar');
const {expect} = require('chai');

describe('rentCar test', function () {

    describe('Test searchCar() method', () => {

        it('should throw error when model is not a string', function () {
            expect(() => rentCar.searchCar([{}], 12)).to.throw('Invalid input!');
        });

        it('should throw error when the shop is not an array', function () {
            expect(() => rentCar.searchCar({}, 'something')).to.throw('Invalid input!');
        });

        it('should throw error when there is no such model in the shop', function () {
            expect(() => rentCar.searchCar(['Audi'], 'BMW')).to.throw('There are no such models in the catalog!');
        });

        it('should return correctly num of models', function () {
            let shop = [
                'BMW',
                'Audi',
            ];
            expect(rentCar.searchCar(shop, 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
        });

    });

    describe('Test calculatePriceOfCar', () => {

        it('should throw error when model is not a string', function () {
            expect(() => rentCar.calculatePriceOfCar(12, 23)).to.throw('Invalid input!');
        });

        it('should throw error when days is not a number', function () {
            expect(() => rentCar.calculatePriceOfCar(12, '23')).to.throw('Invalid input!');
        });

        it('should throw error when there is no such model in catalogue', function () {
            expect(() => rentCar.calculatePriceOfCar('Opel', 23)).to.throw('No such model in the catalog!');
        });

        it('should return the model and price', function () {
            let msg = 'You choose BMW and it will cost $90!';
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(msg);
        });

    })

    describe('Test method checkBudget', () => {

        it('should throw error when costPerDay is not a number', function () {
            expect(()=> rentCar.checkBudget('120',12,100)).to.throw('Invalid input!');
        });

        it('should return You need a bigger budget! when no enough budget', function () {
            expect(rentCar.checkBudget(30,2,50)).to.equal('You need a bigger budget!');
        });

        it('should return You rent a car! when all is valid', function () {
            expect(rentCar.checkBudget(30,2,60)).to.equal('You rent a car!');
        });

    })

})