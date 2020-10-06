function magicMatrices(arr){
    let rows = arr[0].length;
    let cols = arr.length;
    let magical = true;
    let sum = 0;
    let sum2 = 0;

    for (let s=0; s<rows; s++){ 
        sum += arr[0][s]; //finding the sum of 1st row
    }

    for (let i=0; i<cols; i++){ //comparing sum on every row
        sum2 = 0;

        for (z=0; z<rows; z++){
            sum2 += arr[i][z]
        }

        if (sum != sum2){
            magical = false;
        }
    }

    for (let k=0; k<rows; k++){ //comparing sum on every column
        sum2 = 0;

        for (z=0; z<cols; z++){
            sum2 += arr[z][k];
        }

        if (sum != sum2){
            magical = false;
        }
    }

    console.log(magical);
}