enum userRole {
    Admin,
    Client
}

interface IUserNewData {
    newName: string;
    newAge: number;
}

class Person {
    constructor(
        public name: string,
        private age: number,
        public role: userRole
    ) { }

    getAge(): number {
        return this.age;
    }

    setData(newData: IUserNewData) {
        this.name = newData.newName;
        this.age = newData.newAge;
    }
}

const ivan = new Person('Ivan', 30, userRole.Admin);
const newData: IUserNewData = { newName: 'Peter', newAge: 24 }; 
ivan.setData(newData);