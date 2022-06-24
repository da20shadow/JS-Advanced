const ChristmasMovies = require('./02. Christmas Movies_Resources');
const {expect} = require('chai');

describe('ChristmasMovies Test',()=>{
    let instance = {};
    beforeEach(() => instance = new ChristmasMovies());

    describe('Test Instantiation', ()=>{
        it('should return empty array for movieCollection', function () {
            expect(instance.movieCollection).to.deep.equal([]);
            expect(instance).to.haveOwnProperty('movieCollection');
        });
        it('should return empty array for watched', function () {
            expect(instance.watched).to.deep.equal({});
            expect(instance).to.haveOwnProperty('watched');
        });
        it('should return empty array for actors', function () {
            expect(instance.actors).to.deep.equal([]);
            expect(instance).to.haveOwnProperty('actors');
        });
    })

    describe('Test buyMovie()', ()=>{

        it('should throw error when the movie is in the collection', function () {
            instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let err = 'You already own Home Alone in your collection!'
            expect(()=>instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.throw(Error,err);
        });

        it('should return successfully added', function () {
            let msg = 'You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!';
            expect(instance.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.equal(msg);
        });

    })

    describe('Test discardMovie()', ()=>{

        it('should throw error because is not in the collection', function () {
            let err = 'Home is not at your collection!'
            expect(()=>instance.discardMovie('Home')).to.throw(Error,err);
        });

        it('should throw when movie is not watched', function () {
            instance.buyMovie('Home',['first','second']);
            expect(instance.movieCollection.some(m => m.name === 'Home')).to.equal(true)

            let err = 'Home is not watched!'
            expect(()=>instance.discardMovie('Home')).to.throw(Error,err);
        });

        it('should remove it successfully', function () {
            instance.buyMovie('Home',['first','second']);
            expect(instance.movieCollection.some(m => m.name === 'Home')).to.equal(true)
            instance.watchMovie('Home');
            instance.discardMovie('Home');
            expect(instance.movieCollection.some(m => m.name === 'Home')).to.equal(false)
            expect(instance.watched['Home']).to.equal(undefined);
        });


        it('should remove it successfully and return message', function () {
            instance.buyMovie('Home',['first','second']);
            instance.watchMovie('Home');
            expect(instance.discardMovie('Home')).to.equal('You just threw away Home!');
        });

    })

    describe('Test watchMovie()', ()=>{
        it('should throw error when there is no such movie in the collection movies', function () {
            let err = 'No such movie in your collection!';
            expect(()=>instance.watchMovie('Home')).to.throw(Error,err);
        });

        it('should add movie to watched!', function () {
            instance.buyMovie('Home',['actor']);
            expect(instance.watched['Home']).to.equal(undefined);
            instance.watchMovie('Home');
            expect(instance.watched['Home']).to.equal(1);
            instance.watchMovie('Home');
            expect(instance.watched['Home']).to.equal(2);
        });

    })

    describe('Test favouriteMovie()', ()=>{

        it('should throw error when not watched any movie yet', function () {
            let err = 'You have not watched a movie yet this year!';
            expect(()=>instance.favouriteMovie()).to.throw(Error,err);
        });

        it('should return Home', function () {
            instance.buyMovie('Home',['actor']);
            instance.buyMovie('Home 2',['actor']);
            instance.watchMovie('Home');
            instance.watchMovie('Home 2');
            instance.watchMovie('Home 2');
            let msg = 'Your favourite movie is Home 2 and you have watched it 2 times!'
            expect(instance.favouriteMovie()).to.equal(msg);
        });

    })

    describe('Test mostStarredActors()', ()=>{
        it('should throw error when not watched movie yet this year', function () {
            let err = 'You have not watched a movie yet this year!';
            expect(()=>instance.mostStarredActor()).to.throw(Error,err);
        });

        it('should return the most stared actor', function () {
            instance.buyMovie('Home',['actor'])
            instance.buyMovie('Home 2',['actor','actor 2'])
            instance.buyMovie('Home 3',['actor','actor 2', "actor 3"])
            let actor = 'The most starred actor is actor and starred in 3 movies!';
            expect(instance.mostStarredActor()).to.equal(actor);
        });

    })
})