function neighborhoods(input) {
    let neighborhoods = {}
    let neighborhoodNames = input.shift().split(', ');

    for (let name of neighborhoodNames){
        neighborhoods[name] = []
    }

    for (let line of input){
        let [street, person] = line.split(' - ');
        if (neighborhoods.hasOwnProperty(street)){
            neighborhoods[street].push(person);
        }
    }

    let sorted = Object.entries(neighborhoods);
    sorted.sort(function(a, b){
        return b[1].length - a[1].length;
    })
    
    for (let keys of sorted){
        console.log(`${keys[0]}: ${keys[1].length}`);
        for (let person of keys[1]){
            console.log(`--${person}`);
        }
    }
}

neighborhoods(
    ['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)