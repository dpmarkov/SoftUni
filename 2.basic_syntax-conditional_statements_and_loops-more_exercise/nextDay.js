function nextDay(x, y, z) {
    if (x <= 9){
        x = "190" + x;
    } else if (x <= 99){
        x = "19" + x;
    }

    y = Number(y);
    z = Number(z);

    if (y<= 9){
        y = "0" + y;
    }
    if (z<= 9){
        z = "0" + z;
    }

    let givenDate = new Date(x + "-" + y + "-" + z);
    let theNextDay = new Date(givenDate);
    let dateChange = givenDate.getDate() + 1;
    theNextDay.setDate(dateChange);
    theNextDay = theNextDay.toISOString();
    let year = theNextDay.substr(0, 4);
    let month = theNextDay.substr(5, 2);
    let day = theNextDay.substr(8, 2);
    month = Number(month);
    day = Number(day);

    console.log(`${year}-${month}-${day}`);
}
