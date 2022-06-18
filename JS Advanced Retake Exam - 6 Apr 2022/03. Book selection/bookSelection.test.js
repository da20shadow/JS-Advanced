const bookSelection = require('./bookSelection');
const {expect} = require('chai');

describe('bookSelection Test', function () {

    describe('isGenreSuitable() method Test', () => {

        it('should return: "Those books are suitable"', function () {
            expect(bookSelection.isGenreSuitable('Horror', 13))
                .to.be.equal('Those books are suitable');
        });

        it('should return Books Horror are not suitable', function () {
            let expectedMessage = 'Books with Horror genre are not suitable for kids at 12 age';
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal(expectedMessage);
        });

        it('should return Books Thriller are not suitable', function () {
            let expectedMessage = 'Books with Thriller genre are not suitable for kids at 12 age';
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal(expectedMessage);
        });

    });

    describe('Test isItAffordable()', () => {

        it('should return You dont have enough money when money are negative', function () {
            let expected = "You don't have enough money";
            expect(bookSelection.isItAffordable(99,50)).to.equal(expected);
        });

        it('should return Book bought', function () {
            let expected = "Book bought. You have 9$ left";
            expect(bookSelection.isItAffordable(99,108)).to.equal(expected);
        });

        it('should throw error when price is string', function () {
            let expected = "Invalid input";
            expect(() => bookSelection.isItAffordable('99',108)).to.throw(expected);
        });

        it('should throw error when price is string', function () {
            let expected = "Invalid input";
            expect(() => bookSelection.isItAffordable(99,'108')).to.throw(expected);
        });

    });

    describe('Test suitableTitles()', () => {

        it('should throw error when array is not array', function () {
            let msg = 'Invalid input';
            expect(()=> bookSelection.suitableTitles('No','Horror')).to.throw(msg)
        });

        it('should throw error when array is not array', function () {
            let msg = 'Invalid input';
            expect(()=> bookSelection.suitableTitles(['Title'],['Horror'])).to.throw(msg)
        });

        it('should return correct array', function () {
            let arrExp = [ 'Wrong way' ];
            expect(bookSelection.suitableTitles([{title: 'Wrong way',genre:'Horror'}],'Horror')).to.deep.equal(arrExp);
        });

    })

})