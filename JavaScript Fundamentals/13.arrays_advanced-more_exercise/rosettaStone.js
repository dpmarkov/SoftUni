function rosettaStone(arr){
    let n = Number(arr.shift())
    let template = []

    for (let i=0; i<n; i++){
        let temp = arr.shift()
        temp = temp.split(' ').map(Number);
        template.push(temp);
    }
    
    for (let k=0; k<arr.length; k++){
        arr[k] = arr[k].split(' ').map(Number)
    }

    let lastElement = arr[arr.length-1][arr[0].length-1];
    
    for (let row=0; row<arr.length; row++){
        for (let col=0; col<arr[0].length; col++){
            let rowT = row;
            let colT = col;

            while (rowT >= template.length){
                rowT -= template.length;
            }
            while (colT >= template[0].length){
                colT -= template[0].length;
            }

            arr[row][col] += template[rowT][colT]

            while (arr[row][col] > 26){
                arr[row][col] -= 27;
            }

            switch (arr[row][col]) {
                case 0:
                    arr[row][col] = " ";
                    break;
                case 1:
                    arr[row][col] = "A";
                    break;
                case 2:
                    arr[row][col] = "B";
                    break;
                case 3:
                    arr[row][col] = "C";
                    break;
                case 4:
                    arr[row][col] = "D";
                    break;
                case 5:
                    arr[row][col] = "E";
                    break;
                case 6:
                    arr[row][col] = "F";
                    break;
                case 7:
                    arr[row][col] = "G";
                    break;
                case 8:
                    arr[row][col] = "H";
                    break;
                case 9:
                    arr[row][col] = "I";
                    break;
                case 10:
                    arr[row][col] = "J";
                    break;
                case 11:
                    arr[row][col] = "K";
                    break;
                case 12:
                    arr[row][col] = "L";
                    break;
                case 13:
                    arr[row][col] = "M";
                    break;
                case 14:
                    arr[row][col] = "N";
                    break;
                case 15:
                    arr[row][col] = "O";
                    break;
                case 16:
                    arr[row][col] = "P";
                    break;
                case 17:
                    arr[row][col] = "Q";
                    break;
                case 18:
                    arr[row][col] = "R";
                    break;
                case 19:
                    arr[row][col] = "S";
                    break;
                case 20:
                    arr[row][col] = "T";
                    break;
                case 21:
                    arr[row][col] = "U";
                    break;
                case 22:
                    arr[row][col] = "V";
                    break;
                case 23:
                    arr[row][col] = "W";
                    break;
                case 24:
                    arr[row][col] = "X";
                    break;
                case 25:
                    arr[row][col] = "Y";
                    break;
                case 26:
                    arr[row][col] = "Z";
                    break;   
            }
        }
    }

    let message = "";

    for (let m=0; m<arr.length; m++){
        for (let n=0; n<arr[0].length; n++){
            message += arr[m][n];
        }
    }
    
    console.log(message.trim());
}