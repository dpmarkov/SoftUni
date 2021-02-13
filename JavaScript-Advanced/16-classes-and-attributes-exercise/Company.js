class Company {
    constructor (){
        this.departments = [];
    }
    
    addEmployee(name, salary, position, department){
        if (name == '' || name == undefined || name == null ||
        salary == '' || salary == undefined || salary == null || Number(salary) < 0 ||
        position == '' || position == undefined || position == null ||
        department == '' || department == undefined || department == null ){
            throw new Error('Invalid input!');
        }

        salary = Number(salary);

        this.departments.push({
            name,
            salary,
            position,
            department
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        const sorted = {};
        
        for (let employee of this.departments){
            if (!sorted.hasOwnProperty(employee.department)){
                sorted[employee.department] = {
                    employees: [],
                    totalSalary: 0,
                    numberOfEmployees: 0
                };
            }

            sorted[employee.department].employees.push({
                name: employee.name,
                salary :employee.salary,
                position: employee.position
            });

            sorted[employee.department].totalSalary += employee.salary;
            sorted[employee.department].numberOfEmployees ++;
        }
        
        let bestDepartmentName = '';
        let bestAverageSalary = 0;

        for (let department in sorted){
            let averageSalary = sorted[department].totalSalary / sorted[department].numberOfEmployees;

            if (averageSalary > bestAverageSalary){
                bestDepartmentName = department;
                bestAverageSalary = averageSalary;
            }
        }

        let result = '';

        result += `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestAverageSalary.toFixed(2)}`;
        
        const sortedEmployees = sorted[bestDepartmentName].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        for (let employee of sortedEmployees){
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }

        return result;
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());