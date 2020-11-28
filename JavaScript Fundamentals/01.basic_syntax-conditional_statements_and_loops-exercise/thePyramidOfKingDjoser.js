function thePyramidOfKingDjoser(base, increment){
    let height = Math.floor(Math.ceil(base / 2) * increment);
    let steps = Math.ceil(base / 2);
    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapis = 0;

    for(i=1; i<=steps; i++){
        if (i == steps){ //final step
            gold += Math.pow((base - (i-1)*2) , 2) * increment;
        } else if (i % 5 == 0) {
            let currentStone = Math.pow((base - i*2) , 2) * increment;
            stone += currentStone;
            lapis += Math.pow((base - (i-1)*2), 2) * increment - currentStone;
        } else {
            let currentStone = Math.pow((base - i*2) , 2) * increment;
            stone += currentStone;
            marble += Math.pow((base - (i-1)*2), 2) * increment - currentStone;
        }   
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${height}`)
}