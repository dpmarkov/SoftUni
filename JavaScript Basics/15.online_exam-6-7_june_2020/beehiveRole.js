function beehiveRole(a, b, c){
    let intelegence = Number(a);
    let strength = Number(b);
    let sex = c;
    let beeType;

    while(true){
        if (intelegence >= 80 && strength >= 80 && sex == "female"){
            beeType = "Queen Bee";
            break;
        } else if (intelegence >= 80){
            beeType = "Repairing Bee";
            break;
        } else if (intelegence >= 60){
            beeType = "Cleaning Bee";
            break;
        } else if (strength >= 80 && sex == "male"){
            beeType = "Drone Bee";
            break;
        } else if (strength >= 60){
            beeType = "Guard Bee";
            break;
        } else {
            beeType = "Worker Bee";
            break;
        }
    }
    
    console.log(beeType);
}
//beehiveRole("90", "65", "male");