function employees(input){
    let allEmployees = [];

    for (let name of input){
        let persNum = name.length;
        let employee = {
            name: name,
            persNum : persNum
        }

        allEmployees.push(employee)
    }

    for (let obj of allEmployees){
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.persNum}`);
        
    }
}