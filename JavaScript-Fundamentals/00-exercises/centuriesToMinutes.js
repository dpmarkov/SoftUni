function centuriesToMinutes(num){
    let century = Number(num);
    console.log(century);
    let years = century * 100;
    console.log(years);
    let days = parseInt(years * 365.2422);
    console.log(days);
    let hours = days * 24;
    console.log(hours);
    let minutes = hours * 60;
    console.log(minutes);
}