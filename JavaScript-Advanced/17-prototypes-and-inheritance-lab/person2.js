//using constuctor function
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        enumarable: true,
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (string) {
            [this.firstName, this.lastName] = string.split(' ');
        }
    });
}

const myPerson = new Person('Adam', 'Jensen');
console.log(myPerson.fullName);
myPerson.fullName = 'Jacob Adams';
console.log(myPerson.fullName);
console.log(myPerson.firstName);
console.log(myPerson.lastName);