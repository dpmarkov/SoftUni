function bombNumbers (arr1, arr2){
    let bomb = arr2[0]
    let radious = arr2[1]
    let variableLength = arr1.length

    for (i=0; i<variableLength; i++){
        if (arr1[i] == bomb){
            //remove left
            if (i-radious >= 0){ 
                arr1.splice(i-radious, radious+1)
                i -= radious;
            } else {
                arr1.splice(0, i+1)
                i = 0;
            }

            //remove right
            arr1.splice(i, radious)

            //updating array length
            variableLength = arr1.length
            i--
        }   
    }

    let sum = 0;

    for (value of arr1){
        sum += value;
    }
    
    console.log(sum);
}