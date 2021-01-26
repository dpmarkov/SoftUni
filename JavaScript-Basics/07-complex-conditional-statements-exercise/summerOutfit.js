function summerOutfit(a,b){
    let degrees = Number(a);
    let dayType = b;
    result = "";

    if (degrees>=10 && degrees <=18){
        switch (dayType){
            case "Morning": result = `It's ${degrees} degrees, get your Sweatshirt and Sneakers.`; break;
            case "Afternoon": result = `It's ${degrees} degrees, get your Shirt and Moccasins.`; break;
            case "Evening": result = `It's ${degrees} degrees, get your Shirt and Moccasins.`; break;
        }
    } else if (degrees>18 && degrees<=24){
        switch (dayType){
            case "Morning": result = `It's ${degrees} degrees, get your Shirt and Moccasins.`; break;
            case "Afternoon": result = `It's ${degrees} degrees, get your T-Shirt and Sandals.`; break;
            case "Evening": result = `It's ${degrees} degrees, get your Shirt and Moccasins.`; break;
        }
    } else {
        switch (dayType){
            case "Morning": result = `It's ${degrees} degrees, get your T-Shirt and Sandals.`; break;
            case "Afternoon": result = `It's ${degrees} degrees, get your Swim Suit and Barefoot.`; break;
            case "Evening": result = `It's ${degrees} degrees, get your Shirt and Moccasins.`; break;
        }
    }

    console.log(result);
}
//summerOutfit("16", "Morning");