function companyUsers(input) {
    let data = {}

    for (let line of input){
        let [company, id] = line.split(' -> ');
        if (!data.hasOwnProperty(company)){
            data[company] = []
        }
        if (!data[company].includes(id)){
            data[company].push(id);
        }
    }

    let sorted = Object.entries(data);
    sorted.sort(function(a, b){
        return a[0].localeCompare(b[0])
    })

    for(let tokens of sorted){
        console.log(tokens[0]);
        for (let id of tokens[1]){
            console.log(`-- ${id}`);
            
        }
    }
}

// companyUsers(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345',
//     ] 
// )

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]
)