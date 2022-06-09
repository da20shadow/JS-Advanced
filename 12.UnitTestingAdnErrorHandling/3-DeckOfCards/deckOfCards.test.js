const deckOfCardsTest = require('./deckOfCards');
const { expect } = require('chai');

describe('Test the function deckOfCards()', () => {

    it('should return Invalid Card when put invalid card in the deck', function () {
        let expected = 'Invalid card: 1C';
        expect(deckOfCardsTest(['AS','10D','KH', '2C','1C'])).to.equal(expected);
    });
    
})