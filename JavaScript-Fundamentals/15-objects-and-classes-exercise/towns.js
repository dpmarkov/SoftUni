function towns(input){
    for (let i=0; i<input.length; i++){
        input[i] = input[i].split(' | ')
    }

    for (let i=0; i<input.length; i++){
        let town = {}
        town.town = input[i][0]
        town.latitude = Number(input[i][1]).toFixed(2)
        town.longitude = Number(input[i][2]).toFixed(2)

        console.log(town);
    }    
}