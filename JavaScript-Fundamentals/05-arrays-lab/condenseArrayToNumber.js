function condenseArrayToNumber(arr){
    let newArr = new Array();

    if (arr.length == 1){
        console.log(arr[0]);   
    } else {
        while(arr.length > 1){
            for(i=0; i<arr.length-1; i++){
                newArr.push(arr[i]+arr[i+1]);
            }

            arr = newArr;
            newArr = [];
        }

        console.log(arr[0]);
    }
}