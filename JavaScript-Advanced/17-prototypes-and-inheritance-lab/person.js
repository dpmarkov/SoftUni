//using a class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(string) {
        [this.firstName, this.lastName] = string.split(' ');
    }
}

const myPerson = new Person('Adam', 'Jensen');
console.log(myPerson.fullName);
myPerson.fullName = 'Jacob Adams';
console.log(myPerson.fullName);
console.log(myPerson.firstName);
console.log(myPerson.lastName);