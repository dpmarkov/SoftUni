function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let isFreeSpace = true;
    let freeSpaceCubic = w * l * h;

    let command = input[index];
    index++;
    while(command !== "Done"){
        let box = Number(command);
        freeSpaceCubic -= box;
        if (freeSpaceCubic < 0){
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(freeSpaceCubic)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }

    if(isFreeSpace){
        console.log(`${freeSpaceCubic} Cubic meters left.`);
    }
}