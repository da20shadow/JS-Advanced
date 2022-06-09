function deckOfCards(deckArr){
    const validCardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    let cardsDeck;
    try {
        cardsDeck = deckArr.map(card => {
            let face;
            let suit
            if (card.length === 2){
                face = card.split('')[0];
                suit = card.split('')[1];
            }else{
                face = '10';
                suit = card.split('')[2];
            }

            if (!validCardFaces.includes(face)){
                throw ('Invalid card: ' + card)
            }

            const validCardSuits = ['S','H','D','C'];
            if (!validCardSuits.includes(suit)){
                throw ('Invalid card: ' + card)
            }

            if (suit !== suit.toUpperCase()){
                throw ('Invalid card: ' + card)
            }

            const suits = {
                S: '\u2660',
                H: '\u2665',
                D: '\u2666',
                C: '\u2663',
            }

            return {
                face: face,
                suit: suits[suit],
                toString(){
                    return (this.face + this.suit);
                }
            }
        })
        return (cardsDeck.join(' '));
    }
    catch (err){
       return(err);
    }

}
deckOfCards(['AS','10D','KH', '2C','1C']);

module.exports = deckOfCards;