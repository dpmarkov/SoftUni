function radioCrystals (arr){
    let target = arr[0];
    let thickness = arr[1];
    let cut = lap = grind = etch = xray = 0;
    let twCut = twLap = twGrind = twEtch = false;

    console.log(`Processing chunk ${thickness} microns`);
    
    while (thickness != target){
        if (thickness > target){
            if (thickness/4 >= target && thickness - thickness/4 > 20){
                thickness = thickness/4;
                cut++;
            } else if (thickness - thickness/5 >= target && thickness/5 > 20){
                if (cut > 0 && twCut != false){ //transporting and washing
                    thickness = Math.floor(thickness);
                    twCut = true;
                }
                thickness -= thickness/5;
                lap++;
            } else if (thickness - 20 >= target){
                if (lap > 0 && twLap != false){ //transporting and washing
                    thickness = Math.floor(thickness);
                    twLap = true;
                }
                thickness -= 20;
                grind++;
            } else {
                if (grind > 0 && twGrind != false){ //transporting and washing
                    thickness = Math.floor(thickness);
                    twGrind = true;
                }
                thickness -= 2;
                etch++;
            }

            if (etch > 0 && twEtch != false){ //transporting and washing
                thickness = Math.floor(thickness);
                twEtch = true;
            }
        } else { //target > thickness
            thickness += 1;
            xray++;
            break;
        }
    }

    if (cut > 0){
        console.log(`Cut x${cut}`);
        console.log("Transporting and washing");
    }
    if (lap > 0){
        console.log(`Lap x${lap}`);
        console.log("Transporting and washing");
    }
    if (grind > 0){
        console.log(`Grind x${grind}`);
        console.log("Transporting and washing");
    }
    if (etch > 0){
        console.log(`Etch x${etch}`);
        console.log("Transporting and washing");
    }
    if (xray > 0){
        console.log(`X-ray x${xray}`);
    }
    
    console.log(`Finished crystal ${thickness} microns`);
}