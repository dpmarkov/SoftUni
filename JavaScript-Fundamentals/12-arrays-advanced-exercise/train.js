function train (arr){
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift())

    for(value of arr){
        oper = value.split(' ');

        if(oper[0] == "Add"){
            wagons.push(oper[1])
        } else {
            for (i=0; i<wagons.length; i++){
                if (wagons[i] + Number(oper[0]) <= capacity){
                    wagons[i] += Number(oper[0]);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}