function arrayRotation(arr, n){
    for (i=1; i<=n; i++){
        let value = arr.shift();
        arr.push(value);
    }

    console.log(arr.join(' '));
}