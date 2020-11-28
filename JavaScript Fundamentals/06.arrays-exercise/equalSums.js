function equalSums(arr){
    let sum1 = 0;
    let sum2 = 0;
    let matchFound = false;
    let i = 0;

    if (arr.length == 1){
        i = 0;
        matchFound = true;  
    } else if (arr.length == 2){
        if (arr[1] == 0){
            i = 0;
            matchFound = true;
        } else if (arr[0] == 0){
            i = 1;
            matchFound = true;
        }
    } else if (arr.length>=3){
        for (i=0; i<arr.length; i++){
            sum1 = sum2 = 0;
            
            for (k=i+1; k<arr.length; k++){
                sum1 += arr[k];
            }
    
            for (n=i-1; n>=0; n--){
                sum2 += arr[n];
            }
    
            if (sum1 == sum2){
                matchFound = true;
                break;
            }
        }
    }
    
    if(matchFound){
        console.log(i);
    } else {
        console.log("no");
    }  
}
