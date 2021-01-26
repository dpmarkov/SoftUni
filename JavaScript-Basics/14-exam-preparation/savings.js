function savings(input){
    let salary = Number(input[0]);
    let months = Number(input[1]);
    let expenditure = Number(input[2]);
    let savedMoney = 0;
    let percentage = 0;

    savedMoney = salary * months * 0.7 - expenditure * months;
    percentage = savedMoney / (salary * months) * 100;
    percentage = percentage.toFixed(2)

    console.log(`She can save ${percentage}%`);
    console.log(savedMoney.toFixed(2));
}

//savings (["1500", "3", "800"]);