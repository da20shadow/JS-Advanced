const playingCardsTest = require('./playingCards');
const {expect} = require('chai');

describe('Test the function PlayingCards', function () {

    it('should return A Spades when put A S', function () {
        let card = playingCardsTest('A','S');
        let cardToString = card.toString();
        expect(cardToString).to.equal('A\u2660');
    });
})