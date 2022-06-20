const cinema = require('./cinema');
const {expect} = require('chai');

describe('Test cinema object functionality', function () {

    describe('showMovies()', () => {

        it('should return there are no movies', function () {
            let msg = 'There are currently no movies to show.';
            expect(cinema.showMovies([])).to.equal(msg);
        });

        it('should return 2 movies', function () {
            let res = 'Movie 1, Movie 2';
            expect(cinema.showMovies(['Movie 1', 'Movie 2'])).to.equal(res);
        });
    });

    describe('ticketPrice() Test', () => {

        it('should throw error', function () {
            let msg = 'Invalid projection type.';
            expect(() => cinema.ticketPrice('After')).to.throw(msg);
        });

        it('should return 12.00 when Premiere', function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });

        it('should return 7.50 when Premiere', function () {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });

        it('should return 5.50 when Premiere', function () {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });

    describe('swapSeatsInHall() Test', () => {

        it('should return unsuccessful when first place is not integer', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall('1',2)).to.equal(msg);
        });

        it('should return unsuccessful when second place is not integer', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(1,'2')).to.equal(msg);
        });

        it('should return unsuccessful when first place is negative', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(-1,2)).to.equal(msg);
        });

        it('should return unsuccessful when first place 0', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(0,2)).to.equal(msg);
        });

        it('should return unsuccessful when second place 0', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(1,0)).to.equal(msg);
        });

        it('should return unsuccessful when first place is > 20', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(25,2)).to.equal(msg);
        });

        it('should return unsuccessful when second place is negative', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(1,-2)).to.equal(msg);
        });

        it('should return unsuccessful when second place is negative', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(1,21)).to.equal(msg);
        });

        it('should return unsuccessful when second place is negative', function () {
            let msg = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(1,1)).to.equal(msg);
        });

        it('should return success', function () {
            expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.')
        });

        it('should return success', function () {
            expect(cinema.swapSeatsInHall(20,12)).to.equal('Successful change of seats in the hall.')
        });

        it('should return success', function () {
            expect(cinema.swapSeatsInHall(2,20)).to.equal('Successful change of seats in the hall.')
        });
    })
})