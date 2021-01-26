function softuniReception(arr){
    let [eff1, eff2, eff3, students] = arr.map(Number);
    
    efficiency = eff1 + eff2 + eff3;  
    let hours = 0;

    while (students > 0){
        hours++;
        if (hours % 4 != 0){
            students -= efficiency;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['3','2','5','40'])