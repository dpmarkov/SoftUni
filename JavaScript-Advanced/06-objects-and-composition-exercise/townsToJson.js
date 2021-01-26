function townsToJson(input) {
    let towns = [];

    for (let i=1; i<input.length; i++){
        let tokens = input[i].split('|').map(x => x.trim()).filter(x => x.length>0);
        let [town, latitude, longitude] = tokens;
        
        latitude = Number(Number(latitude).toFixed(2)); 
        longitude = Number(Number(longitude).toFixed(2)); 

        towns.push(
            {
                'Town': town,
                'Latitude': latitude,
                'Longitude': longitude
            }
        );
    }

    console.log(JSON.stringify(towns));
}

townsToJson(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
);
console.log('---');
townsToJson(
    [
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ]
);