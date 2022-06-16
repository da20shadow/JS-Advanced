let {Repository} = require("./solution.js");
const {expect} = require('chai');
//TODO not works gives me 90/100
describe('Repository', function () {

    let repository = null;
    let entity = null;
    let properties = null;

    beforeEach('Create repository', () => {
            properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repository = new Repository(properties);
            entity = {
                name: "John",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        }
    );

    describe('Initialization', function () {

        it('should add props property on init', function () {
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
        });

        it('should have property data on init', function () {
            expect(repository).to.have.property('data');
            expect(typeof repository.data).to.be.equal('object');
            expect(repository.data).to.be.instanceof(Map);
        });

    });

    describe('Test add() method', () => {

        it('should return id 0 when add element for first time and 1 for second.', function () {
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(1);
        });

        it('should store valid entity in the map data', function () {
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.data.get(0)).to.not.be.undefined;
            expect(repository.data.get(0)).to.deep.equal(entity);
            expect(repository.data.get(0)).to.have.property('name').that.equal('John');
            expect(repository.data.get(0)).to.have.property('age').that.equal(22);
            expect(repository.data.get(0)).to.have.property('birthday');
        });

        it('should throw error when property name is missing', function () {
            let entityTest = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property name is missing from the entity!');
        });

        it('should throw error when property age is missing', function () {
            let entityTest = {
                name: "John",
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property age is missing from the entity!');
        });

        it('should throw error when property birthday is missing', function () {
            let entityTest = {
                name: "John",
                age: 22,
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw error when property name is of wrong type', function () {
            let entityTest = {
                name: 123,
                age: 22,
                birthday: '1998-01-06T22:00:00:000Z',
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property name is not of correct type!');
        });

        it('should throw error when property age is of wrong type', function () {
            let entityTest = {
                name: "John",
                age: '22',
                birthday: '1998-01-06T22:00:00:000Z',
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property age is not of correct type!');
        });

        it('should throw error when property birthday is of wrong type', function () {
            let entityTest = {
                name: "John",
                age: 22,
                birthday: '1998-01-06T22:00:00:000Z',
            };
            expect(() => repository.add(entityTest)).to.throw(Error, 'Property birthday is not of correct type!');
        });

    });

    describe('Test Get count method', function () {

        it('should return 0 before adding 3 new entities, then 3', function () {
            expect(repository.count).to.be.equal(0);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            expect(repository.count).to.be.equal(3);
        });

    });

    describe('Test getId()', function () {

        it('should return entity by id', function () {
            repository.add(entity);
            expect(repository.getId(0).name).to.be.equal('John');
            expect(repository.getId(0)).to.have.property('age').equal(22);
            expect(typeof repository.getId(0)).to.be.equal('object');
            expect(repository.getId(0).birthday).instanceof(Date);
            expect(repository.getId(0).birthday.getFullYear()).to.be.equal(1998);
            expect(repository.getId(0).birthday.getMonth()).to.be.equal(0);
            expect(repository.getId(0).birthday.getDate()).to.be.equal(7);
        });

        it('should throw error when no id is found', function () {
            expect(() => repository.getId(10)).to.throw(Error, 'Entity with id: 10 does not exist!');
        });

    });

    describe('Test update(id,newEntity) method', function () {

        let newEntity = {
            name: 'Mehmed',
            age: 27,
            birthday: new Date(1994, 10, 2),
        }

        it('should update the specified id correctly', function () {
            repository.add(entity);
            repository.update(0, newEntity);
            expect(repository.getId(0).name).to.be.equal('Mehmed');
            expect(repository.getId(0).age).to.be.equal(27);
            expect(repository.getId(0).birthday.getFullYear()).to.be.equal(1994);
        });

        it('should throw error when the id is invalid', function () {
            repository.add(entity);
            expect(() => repository.update(9, newEntity)).to.throw(Error, 'Entity with id: 9 does not exist!');
            expect(() => repository.update(-9, newEntity)).to.throw(Error, 'Entity with id: -9 does not exist!');
            expect(() => repository.update('sad', newEntity)).to.throw(Error, 'Entity with id: sad does not exist!');
        });

        it('should throw error if missing prop in object', function () {
            repository.add(newEntity);
            expect(()=> repository.update(0,{name:'Meti',age:27})).to.throw(Error);
        });

        it('should throw error if type is invalid', function () {
            repository.add(newEntity);
            expect(()=> repository.update(0,{name:12,age:27,birthday:{}})).to.throw(TypeError);
        });

    });

    describe('Test delete(id) method', () => {

        it('should delete one valid entity', function () {
            repository.add(entity);
            repository.add(entity);
            repository.del(1);
            expect(repository.data.has(1)).to.be.equal(false);
        });

        it('should throw error when id is invalid', function () {
            repository.add(entity);
            expect(()=> repository.del(-10)).to.throw(Error,'Entity with id: -10 does not exist!');
        });
    });

});