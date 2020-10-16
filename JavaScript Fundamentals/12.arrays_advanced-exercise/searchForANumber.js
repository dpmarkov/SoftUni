function searchForANumber (arr1, arr2){
    let repeats = 0;
    let collection = arr1.splice(arr2[1], arr2[0]-arr2[1]);

    for (value of collection){
        if (value == arr2[2]){
            repeats++
        }
    } 
    console.log(`Number ${arr2[2]} occurs ${repeats} times.`); 
}