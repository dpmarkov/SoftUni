function matchDates([input]) {
    let pattern = /\b\d{2}([.\-\/])[A-Z][a-z]{2}\1[0-9]{4}/g;

    dates = input.match(pattern);

    for (let date of dates){
        let [day, month, year] = date.split(date[2]);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(
    "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
)