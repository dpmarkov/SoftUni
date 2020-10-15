function smallestTwoNumbers (arr){
    function findSmallestNumAndRemove(arr2){
        let smallestN = arr2[0];

        for(value of arr2){
            if (value < smallestN){
                smallestN = value;
            }
        }

        for(i=0; i<arr.length; i++){
            if (arr[i] == smallestN){
                arr.splice(i, 1) //delete the element
                break; //in case of dublicates
            }
        }

        return smallestN;
    }

    console.log(findSmallestNumAndRemove(arr), findSmallestNumAndRemove(arr));
}