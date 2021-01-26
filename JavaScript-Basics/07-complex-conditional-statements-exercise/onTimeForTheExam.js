function onTimeForTheExam (a,b,c,d){
    let hourExam = Number (a);
    let minuteExam = Number (b);
    let hourArrival = Number (c);
    let minuteArrival = Number (d);
    let exam = 0;
    let arrival = 0;
    let minutes = 0;
    let hours = 0;
    
    exam = hourExam * 60 + minuteExam;
    arrival = hourArrival * 60 + minuteArrival;

    if (arrival > exam){
        console.log("Late");
        if (arrival-exam < 60){
            console.log(`${arrival-exam} minutes after the start`);
        } else {
            minutes = (arrival - exam) % 60;
            hours = Math.trunc((arrival - exam) / 60);
            if (minutes < 10){
                minutes = "0" + minutes;
            }
            console.log(`${hours}:${minutes} hours after the start`);
        }
    } else if (arrival == exam){
        console.log("On time");
    } else if ((exam - arrival) <= 30) {
        console.log("On time");
        minutes = exam - arrival;
        console.log(`${minutes} minutes before the start`);
    } else {
        console.log("Early");
        minutes = exam - arrival;
        if (minutes < 60){
            if (minutes < 10){
                minutes = "0" + minutes;
            }
            console.log(`${minutes} minutes before the start`);
        } else {
            minutes = (exam - arrival) % 60;
            hours = Math.trunc((exam - arrival) / 60);
            if (minutes < 10){
                minutes = "0" + minutes;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }       
    }
} 
onTimeForTheExam("11", "30", "8", "12");