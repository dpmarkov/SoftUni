function personalTitles(x,y){
    let age = Number(x);
    let sex = y;

    if (sex == "m" && age < 16){
        console.log("Master");
    } else if (sex == "m" && age >= 16){
        console.log("Mr.");
    } else if (sex == "f" && age < 16){
        console.log("Miss");
    } else {
        console.log("Ms.");
    }
}
//personalTitles("12", "f");