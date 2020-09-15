function vacation(people, type, day){
    let totalPrice = 0;

    if (type == "Students"){
        switch (day){
            case "Friday":
                price = 8.45;
                break;
            case "Saturday":
                price = 9.80;
                break;
            case "Sunday":
                price = 10.46;
                break;
        }
    } else if (type == "Business"){
        switch (day){
            case "Friday":
                price = 10.90;
                break;
            case "Saturday":
                price = 15.60;
                break;
            case "Sunday":
                price = 16;
                break;
        }
    } else { //type = Regular
        switch (day){
            case "Friday":
                price = 15;
                break;
            case "Saturday":
                price = 20;
                break;
            case "Sunday":
                price = 22.50;
                break;
        }
    }

    totalPrice = people * price;

    if (type == "Students" && people >= 30){
        totalPrice = 0.85 * totalPrice;
    } else if (type == "Business" && people >= 100){
        totalPrice = totalPrice - 10 * price;
    } else if (type == "Regular" && (people >= 10 && people <= 20)){
        totalPrice = 0.95 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}