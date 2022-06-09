function playingCards(face,suit){
    const validCardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    if (!validCardFaces.includes(face)){
        throw new Error('Error! Invalid Card Face!')
    }

    const validCardSuits = ['S','H','D','C'];
    if (!validCardSuits.includes(suit)){
        throw new Error('Error! Invalid Card Suit!')
    }

     if (suit !== suit.toUpperCase()){
            throw new Error('Error! Invalid Card Suit')
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

}

console.log(playingCards('10','S'));
module.exports = playingCards;