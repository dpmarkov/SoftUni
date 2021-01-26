function arrayManipulator (arr1, arr2){
    for (value of arr2){
        let commands = value.split(' ')
        let command = commands[0];
        let index;
        let element;

        if (command == "add"){
            index = Number(commands[1]);
            element = Number(commands[2]);

            arr1.splice(index , 0, element)
        } else if (command == "addMany") {
            index = Number(commands[1]);
            let elemsToAdd = []

            for (i=2; i<commands.length; i++){
                elemsToAdd.push(Number(commands[i]))
            }

            arr1.splice(index, 0, ...elemsToAdd);
        } else if (command == "contains") {
            element = Number(commands[1]);

            if (arr1.includes(element)){
                index = arr1.indexOf(element);
                console.log(index);
            } else {
                console.log(-1);
            }
        } else if (command == "remove"){
            index = Number(commands[1]);
            arr1.splice(index, 1)
        } else if (command == "shift"){
            let rotations = Number(commands[1])

            for (let k=1; k<=rotations; k++){
                let temp = arr1.shift();
                arr1.push(temp);
            }
        } else if (command == "sumPairs"){
            let pairs = Math.ceil(arr1.length/2);
            let pairsArr = [];

            for (let p=0; p<pairs; p++){
                let firstEl = arr1.shift() 
                let secondEl = arr1.shift()

                if (secondEl == undefined){
                    secondEl = 0;
                }

                let sumPair = firstEl + secondEl;
                pairsArr.push(sumPair);
            }

            arr1 = pairsArr
        } else { //print and stop
            console.log("[ " + arr1.join(', ') + " ]");
            break;
        }
    }
}