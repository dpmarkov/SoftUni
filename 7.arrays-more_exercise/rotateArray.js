function rotateArray(arr){
    let r = Number(arr.pop())

    if (!isNaN(r)){
        for (i=1; i<=r; i++){
            let lastEl = arr.pop();

            for (k=arr.length-1; k>=0; k--){
                arr[k+1] = arr[k];
            }

            arr[0] = lastEl;
        }

        console.log(arr.join(' '));
    } else {
        console.log("Empty");
    }
}