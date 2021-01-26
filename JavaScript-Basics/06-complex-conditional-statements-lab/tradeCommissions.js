function tradeCommissions(a,b){
    let city = a;
    let sellings = Number(b);
    let commission = 0;
    isError = false;

    if (city === "Sofia"){
        if (sellings >= 0 && sellings <= 500){
            commission = sellings * 0.05;
        } else if (sellings > 500 && sellings <= 1000){
            commission = sellings * 0.07;
        } else if (sellings > 1000 && sellings <= 10000){
            commission = sellings * 0.08;
        } else if (sellings > 10000){
            commission = sellings * 0.12;
        } else {
            isError = true;
        }
    } else if (city === "Varna"){
        if (sellings >= 0 && sellings <= 500){
            commission = sellings * 0.045;
        } else if (sellings > 500 && sellings <= 1000){
            commission = sellings * 0.075;
        } else if (sellings > 1000 && sellings <= 10000){
            commission = sellings * 0.1;
        } else if (sellings > 10000){
            commission = sellings * 0.13;
        } else {
            isError = true;
        }
    } else if (city === "Plovdiv"){
        if (sellings >= 0 && sellings <= 500){
            commission = sellings * 0.055;
        } else if (sellings > 500 && sellings <= 1000){
            commission = sellings * 0.08;
        } else if (sellings > 1000 && sellings <= 10000){
            commission = sellings * 0.12;
        } else if (sellings > 10000){
            commission = sellings * 0.145;
        } else {
            isError = true;
        }
    } else {
        isError = true;
    }

    if (isError){
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }
}
//tradeCommissions("Sofia", "1500");