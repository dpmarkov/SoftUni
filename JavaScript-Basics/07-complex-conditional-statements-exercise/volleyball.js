function volleyball(a,b,c){ //5:18
    let year = a;
    let weekends = 48;
    let holidays = Number(b);
    let timesGoToHomeTown = Number(c);
    let daysSofiaPlay = (weekends-timesGoToHomeTown) * 3 / 4 + holidays * 2 / 3;
    let daysHomeTownPlay = timesGoToHomeTown;

    result = daysSofiaPlay + daysHomeTownPlay;
    if (year == "leap"){
        result = result * 1.15;
    }
    
    console.log(Math.floor(result));
}
//volleyball("leap", "40", "10");