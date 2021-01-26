function arrayManipulations (input){
    let arr = input[0].split(' ');

    for (i=1; i<input.length; i++){
        let oper = input[i].split(' ');

        if (oper[0] == "Add"){
            arr.push(oper[1]);
        } else if (oper[0] == "Remove"){
            for (let j=0; j<arr.length; j++){
                if (arr[j] == oper[1]){
                    arr.splice(j, 1);
                    break;
                }
            }
        } else if (oper[0] == "RemoveAt"){
            arr.splice(oper[1], 1);
        } else { //insert
            arr.splice(oper[2], 0, oper[1]);
        }
    }

    console.log(arr.join(' '));
}