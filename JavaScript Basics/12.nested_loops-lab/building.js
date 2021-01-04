function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let roomType = "";
    let linePrint = "";

    for (i=floors; i>=1; i--){
        for (k=0; k<rooms; k++){
            if (i == floors){
                roomType = "L";
            } else if (i % 2 == 0){
                roomType = "O";
            } else {
                roomType = "A"
            }
            linePrint += roomType + i + k + " ";
        }
        console.log(linePrint);
        linePrint = "";
    }
}
//building([ '6', '4' ]);