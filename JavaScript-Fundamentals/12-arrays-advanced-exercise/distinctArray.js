function distinctArray (arr){
    for (i=0; i<arr.length; i++){
        for (k=0; k<arr.length; k++){
            if (k != i && arr[i] == arr[k]){
                arr.splice(k, 1);
                k--; 
            }
        }
    }

    console.log(arr.join(' '));
}