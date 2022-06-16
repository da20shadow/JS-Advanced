const { expect } = require('chai');
const { Repository } = require('./solution');

describe("Repository Tests", () => {
    let instance = {};

    beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }));

    describe('Test should check the size of the Map object', () => {
        it('should return 0 when check the map size', () => {
            expect(instance.count).to.equal(0);
        });
    });

    describe('Test should add valid object to the instance', () => {
        it('should return zero id for only one object added', () => {
            expect(instance.add({ name: 'John', age: 20, birthday: {} })).to.equal(0);
        });
    });

    describe('Tests should check getId function', () => {
        it('should throw error that entity with the given id does not exist', () => {
            expect(() => instance.getId(10)).to.throw('Entity with id: 10 does not exist!');
        });
    });

    describe('Tests should check update function', () => {
        it('should throw error for no id presented in the data', () => {
            expect(() => instance.update(0, {},)).to.throw('Entity with id: 0 does not exist!');
        });

        it('should throw error for missing prop in object', () => {
            instance.add({ name: '', age: 0, birthday: {}, });
            expect(() => instance.update(0, { age: 1, birthday: { date: 0 } })).to.throw(Error);
        });

        it('should throw TypeError for invalid type input', () => {
            instance.add({ name: '', age: 0, birthday: {}, });
            expect(() => instance.update(0, { name: 0, age: 1, birthday: { date: 0 } })).to.throw(TypeError);
        });
    })

    describe('Tests should check del function', () => {
        it('should delete the given index correctly', () => {
            instance.add({ name: '', age: 1, birthday: {} });
            instance.add({ name: '', age: 1, birthday: {} });
            instance.del(1);
            expect(instance.data.has(1)).to.eq(false);
        });

        it('should throw error for not existing index in the collection', () => {
            expect(() => instance.del(-10)).to.throw('Entity with id: -10 does not exist!');
        });
    });
});