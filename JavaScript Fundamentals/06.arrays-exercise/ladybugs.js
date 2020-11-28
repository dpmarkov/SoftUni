function ladybugs(arr){
    let field = Number(arr[0]);
    let arrIn = [];
    let arr2 = arr[1].split(' ');

//field is populated with ladybugs..........................................................................................
    for (let i=0; i<field; i++){
        arrIn.push(0);
    }

    for (value of arr2){
        if(value < field && value >= 0){
            arrIn[value] = 1;
        } 
    }
//..........................................................................................field is populated with ladybugs

    for (let k=2; k<arr.length; k++){
        let oper = arr[k].split(' ');
        let index = Number(oper[0]);
        let direction = oper[1];
        let moves = Number(oper[2]);

        if (moves != 0){
            if (moves < 0){
                moves = Math.abs(moves);
                if (direction == "left"){
                    direction = "right";
                } else {
                    direction = "left";
                }
            }
            
    
            if (index >=0 && index < field && arrIn[index] == 1){
                arrIn[index] = 0;

                if (direction == "right"){
                    if (index+moves < field){
                        if (arrIn[index+moves] != 0){
                            for (p=index+moves; p<field; p += moves){
                                if (arrIn[p] == 0){
                                    arrIn[p] = 1;
                                    break;
                                }
                            }
                        } else {
                            arrIn[index+moves] = 1;
                        }
                    }
                } else {
                    if (index-moves >= 0){
                        if (arrIn[index-moves] != 0){
                            for (p=index-moves; p>=0; p -= moves){
                                if (arrIn[p] == 0){
                                    arrIn[p] = 1;
                                    break;
                                }
                            }
                        } else {
                            arrIn[index-moves] = 1;
                        }
                    }
                }
            }
        }
    }

    console.log(arrIn.join(' '));
}
