const expect = require('chai').expect;
let { Repository } = require('./solution.js');

describe('Unit Tests', function () {
    it('constructor', function () {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);

        expect(repository.props).to.deep.equal(properties);
        expect(repository.data).to.be.instanceOf(Map);
        expect(repository.nextId).to.be.a('function');
    });

    it('count getter', () => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);

        expect(repository.data.size).to.equal(0);
        expect(repository.count).to.be.equal(0);
    });

    it('add', () => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "John",
            age: 26,
            birthday: new Date(1994, 3, 1)
        };     

        expect(repository.add(entity)).equal(0);
        expect(repository.count).to.equal(1);
        expect(repository.add(entity2)).equal(1);
        expect(repository.count).to.equal(2);
        expect(repository.data.get(0)).to.deep.equal(entity);
        expect(repository.data.get(1)).to.deep.equal(entity2);
    });

    it('add, validation errors', ()=>{
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);

        const entity = {
            name: "a"
        };
        const entity2 = {
            name: "a",
            age: 5
        };
        const entity3 = {
            name: 1,
            age: 1,
            birthday: {}
        };
        const entity4 = {
            name: 'a',
            age: 'a',
            birthday: {}
        };
        const entity5 = {
            name: 'a',
            age: 5,
            birthday: 'a'
        };
        const entity6 = {
            age: 5,
            birthday: {}
        };

        expect(() => {
            repository.add(entity);
        }).to.throw('Property age is missing from the entity!');

        expect(() => {
            repository.add(entity2);
        }).to.throw('Property birthday is missing from the entity!');

        expect(() => {
            repository.add(entity6);
        }).to.throw('Property name is missing from the entity!');

        expect(() => {
            repository.add(entity3);
        }).to.throw(TypeError, 'Property name is not of correct type!');

        expect(() => {
            repository.add(entity4);
        }).to.throw(TypeError, 'Property age is not of correct type!');
        expect(() => {
            repository.add(entity5);
        }).to.throw(TypeError, 'Property birthday is not of correct type!');
    });

    it('getId',() => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        expect(() => {
            repository.getId(0);
        }).to.throw('Entity with id: 0 does not exist!');

        expect(() => {
            repository.getId(1);
        }).to.throw('Entity with id: 1 does not exist!');

        repository.add(entity); // Returns 0
        repository.add(entity); // Returns 1

        const res1 = repository.getId(0);
        const res2 = repository.getId(1);

        expect(res1).to.deep.equal(entity);
        expect(res2).to.deep.equal(entity);

        expect(() => {
            repository.getId(2);
        }).to.throw('Entity with id: 2 does not exist!');

        expect(() => {
            repository.getId(-1);
        }).to.throw('Entity with id: -1 does not exist!');
    });

    it('update',() => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repository.add(entity); // Returns 0
        repository.add(entity); // Returns 1

        const newEntity = {
            name: 'Gosho',
            age: 25,
            birthday: new Date(1993, 7, 2)
        };
        repository.update(1, newEntity);

        expect(repository.getId(1)).to.deep.equal(newEntity);

        expect(() => {
            repository.update(-1, newEntity);
        }).to.throw('Entity with id: -1 does not exist!');

        expect(() => {
            repository.update(2, newEntity);
        }).to.throw('Entity with id: 2 does not exist!');

        const entity2 = {
            name: "a",
            age: 5
        };
        const entity3 = {
            name: 1,
            age: 1,
            birthday: {}
        };

        expect(() => {
            repository.update(0, entity2);
        }).to.throw('Property birthday is missing from the entity!');

        expect(() => {
            repository.update(0, entity3);
        }).to.throw(TypeError, 'Property name is not of correct type!');
    });

    it('del',() => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repository.add(entity); // Returns 0
        repository.add(entity); // Returns 1

        expect(() => {
            repository.del(2, entity);
        }).to.throw('Entity with id: 2 does not exist!');
        
        repository.del(1);

        expect(repository.count).to.equal(1);

        expect(() => {
            repository.getId(1);
        }).to.throw('Entity with id: 1 does not exist!');
    });
});