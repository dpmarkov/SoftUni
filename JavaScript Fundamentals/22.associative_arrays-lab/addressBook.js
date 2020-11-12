function addressBook(input) {
    let book = {};

    for (let line of input){
        line = line.split(':');
        let [name, address] = line;
        book[name] = address;
    }

    let sorted = Object.entries(book);
    sorted.sort(function (a, b){
        return a[0].localeCompare(b[0]);
    })
    
    for (let arr of sorted){
        console.log(`${arr[0]} -> ${arr[1]}`);
    }
}

addressBook(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)