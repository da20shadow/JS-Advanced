const library = require('./library');
const {expect} = require('chai');

describe('Library', function () {


    describe('calcPriceOfBook() Test', () => {

        it('should throw and error when name of the book is not a string', function () {
            expect(() => library.calcPriceOfBook(25, 2020)).to.throw(Error);
        });

        it('should throw and error when the year of the book is a string', function () {
            expect(() => library.calcPriceOfBook('Book Title', '2020')).to.throw(Error);
        });

        it('should return successfully', function () {
            expect(library.calcPriceOfBook('Title', 2020)).to.equal('Price of Title is 20.00')
        });

        it('should return with 50% discount', function () {
            expect(library.calcPriceOfBook('Title', 1920)).to.equal('Price of Title is 10.00')
        });

        it('should return with 50% discount', function () {
            expect(library.calcPriceOfBook('Title', 1980)).to.equal('Price of Title is 10.00')
        });

    });

    describe('findBook()', () => {

        it('should throw error when no books in the array', function () {
            expect(() => library.findBook([], 'Title Desired')).to.throw('No books currently available');
        });

        it('should return book found', function () {
            expect(library.findBook(['title','title2'],'title2')).to.equal('We found the book you want.');
        });

        it('should return that the book is not here', function () {
            expect(library.findBook(['Title 1', 'Title 2'],'Title 3')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangetheBooks() Test',()=>{
        it('should throw error', function () {
            expect(()=> library.arrangeTheBooks('3')).to.throw(Error);
        });

        it('should throw error', function () {
            expect(()=> library.arrangeTheBooks(-2)).to.throw(Error);
        });

        it('should return arranged', function () {
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
        });

        it('should return arranged', function () {
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        });

        it('should return arranged when equal', function () {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('should return insufficient space', function () {
            expect(library.arrangeTheBooks(120)).to.equal('Insufficient space, more shelves need to be purchased.')
        });
    })

})