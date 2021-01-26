function meetings(input) {
    let weekdays = {}

    for (let line of input){
        let [day, person] = line.split(' ');
        if (!weekdays.hasOwnProperty(day)){
            weekdays[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    // for (let [day, person] of Object.entries(weekdays)){
    //     console.log(`${day} -> ${person}`);
    // }

    for (let day in weekdays){
        console.log(`${day} -> ${weekdays[day]}`);
    }
}

meetings(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)