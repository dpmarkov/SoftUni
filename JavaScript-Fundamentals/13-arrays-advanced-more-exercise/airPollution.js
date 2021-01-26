function airPollution(arr1, arr2){
    for (let i=0; i<5; i++){
        arr1[i] = arr1[i].split(' ').map(Number);
    }
    
    for (let k=0; k<arr2.length; k++){
        let oper = arr2[k].split(' ');
        let force = oper[0];
        let index = Number(oper[1]);

        if (force == "breeze"){
            for (let b=0; b<5; b++){
                arr1[index][b] -= 15;
                if (arr1[index][b] < 0){
                    arr1[index][b] = 0;
                }
            }
        } else if (force == "gale") {
            for (let g=0; g<5; g++){
                arr1[g][index] -= 20;
                if (arr1[g][index] < 0){
                    arr1[g][index] = 0;
                }
            }
        } else { //smog
            for (let r = 0; r<5; r++){
                for (let c = 0; c<5; c++){
                    arr1[r][c] += index;
                }
            }
        }
    }

    let pm = [];

    for (let x = 0; x<5; x++){
        for (let y = 0; y<5; y++){
            if (arr1[x][y] >= 50){
                pm.push("[" + x + "-" + y + "]")
            }
        }
    }

    if (pm.length>0){
        console.log("Polluted areas: " + pm.join(', '));
    } else {
        console.log("No polluted areas");
    }
}