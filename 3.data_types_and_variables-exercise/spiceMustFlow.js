function spiceMustFlow(yield){
    let days = 0;
    let spice = 0;

    while(yield>=100){
        days++;

        spice += yield;
        yield -= 10;
        spice -= 26;
    }

    if (spice >= 26){ //exhausted mine
        spice -= 26;
    }

    console.log(days)
    console.log(spice)
}