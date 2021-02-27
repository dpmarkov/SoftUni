function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target == 'Employee') {
                throw new Error('Cannot instantiate directly.')
            }

            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            const task = this.tasks.shift();  
            this.tasks.push(task);
            console.log(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary () {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age, salary, tasks) {
            super(name, age, salary, tasks);

            this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age, salary, tasks) {
            super(name, age, salary, tasks);

            this.tasks.push(`${this.name} is working on a complicated task.`);
            this.tasks.push(`${this.name} is taking time off work.`);
            this.tasks.push(`${this.name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age, salary, tasks) {
            super(name, age, salary, tasks);

            this.dividend = 0;
            this.tasks.push(`${this.name} scheduled a meeting.`);
            this.tasks.push(`${this.name} is preparing a quarterly report.`);
        }

        getSalary () {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solve();

const personJ = new classes.Junior('Adam', 17);
personJ.salary = 1000;
console.log(personJ.collectSalary());
console.log(personJ.work());

const personS = new classes.Senior('Michelle', 24);
personS.salary = 3500;
console.log(personS.collectSalary());
console.log(personS.work());
console.log(personS.work());
console.log(personS.work());
console.log(personS.work());

const personM = new classes.Manager('Elena', 29);
personM.salary = 9000;
personM.dividend = 1000;
console.log(personM.collectSalary());
console.log(personM.work());