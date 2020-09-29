function equalArrays(arr, arr2){
    let identical = true;

    for (k=0; k<arr.length; k++){
        if (arr[k] != arr2[k]){
            identical = false;
            break;
        }
    }

    if (identical){
        let sum = 0;
        for (i = 0; i<arr.length; i++){
            sum += parseInt(arr[i]);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${k} index`);
    }
}