function honeyHarvest(a, b, c){
    let flowerType = a;
    let flowerCount = Number(b);
    let season = c;
    let totalHoney = 0;

    //["Sunflower", "Daisy", "Lavender", "Mint"].
    if (season == "Summer"){
        if (flowerType == "Sunflower"){
            totalHoney = flowerCount * 8;
        } else if (flowerType == "Daisy"){
            totalHoney = flowerCount * 8;
        } else if (flowerType == "Lavender"){
            totalHoney = flowerCount * 8;
        } else {
            totalHoney = flowerCount * 12;
        }
        totalHoney = totalHoney * 1.10;
    } else if (season == "Autumn"){
        if (flowerType == "Sunflower"){
            totalHoney = flowerCount * 12;
        } else if (flowerType == "Daisy"){
            totalHoney = flowerCount * 6;
        } else if (flowerType == "Lavender"){
            totalHoney = flowerCount * 6;
        } else {
            totalHoney = flowerCount * 6;
        }
        totalHoney = totalHoney * 0.95;
    } else if (season == "Spring"){
        if (flowerType == "Sunflower"){
            totalHoney = flowerCount * 10;
        } else if (flowerType == "Daisy"){
            totalHoney = flowerCount * 12;
        } else if (flowerType == "Lavender"){
            totalHoney = flowerCount * 12;
        } else {
            totalHoney = flowerCount * 10;
        }
        if (flowerType == "Daisy" || flowerType == "Mint"){
            totalHoney = totalHoney * 1.10;
        }
    }
    
    console.log(`Total honey harvested: ${totalHoney.toFixed(2)}`);
}
// honeyHarvest("Daisy",
//     "15",
//     "Spring");