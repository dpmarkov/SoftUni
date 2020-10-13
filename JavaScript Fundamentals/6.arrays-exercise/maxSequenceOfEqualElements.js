function maxSequenceOfEqualElements(arr){
    let elem;
    let elem2;
    let seq = 0;
    let seq2 = 0;
    let result = "";

    for (i=0; i<arr.length; i++){
        elem = arr[i];
        seq = 0;
        for (k=0; k<arr.length; k++){
            if (elem == arr[k] && (elem == arr[k-1] || elem == arr[k+1])){
                seq++;
            }
        }

        if (seq > seq2){
            seq2 = seq;
            elem2 = elem;
        }
    }

    for(p=1; p<=seq2; p++){
        result += elem2 + " ";
    }
    console.log(result);
}