function houseParty (arr){
    let guests = [];

    for (i=0; i<arr.length; i++){
        oper = arr[i].split(' ')
        let guest = oper[0];
        let going = oper[2];
        
        if (going == "going!"){
            if (!guests.includes(guest)){
                guests.push(guest)
            } else {
                console.log(`${guest} is already in the list!`);
            }
        } else {
            if (guests.includes(guest)){
                let indexToRemove = arr.indexOf(guest)
                guests.splice(indexToRemove, 1)
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}
