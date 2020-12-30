function hotelRoom(a,b){
    let month = a;
    let nights = Number(b);
    let priceStudio = 0;
    let priceAppartment = 0;
    let totalS = 0;
    let totalA = 0;

    if (month === "May" || month === "October"){
        priceStudio = 50;
        priceAppartment = 65; 
        totalA = priceAppartment * nights;
        totalS = priceStudio * nights;
    } else if (month === "June" || month === "September"){
        priceStudio = 75.20;
        priceAppartment = 68.70;
        totalA = priceAppartment * nights;
        totalS = priceStudio * nights;       
    } else {
        priceStudio = 76;
        priceAppartment = 77;
        totalA = priceAppartment * nights;
        totalS = priceStudio * nights;
    }

    if (nights > 14 && (month === "May" || month === "October")){
        totalS = totalS * 0.7;
    } else if (nights > 7 && (month === "May" || month === "October")){
        totalS = totalS * 0.95;
    }

    if (nights > 14 && (month === "June" || month === "September")){
        totalS = totalS * 0.8;
    }

    if (nights > 14){
        totalA = totalA * 0.9;
    }

    console.log(`Apartment: ${totalA.toFixed(2)} lv.`);
    console.log(`Studio: ${totalS.toFixed(2)} lv.`);
}