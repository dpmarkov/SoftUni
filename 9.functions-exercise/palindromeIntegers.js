function palindromeIntegers(arr){
    function palindromeChecker(num){
        num = num.toString()
        let bNum = '';
        for (let i = num.length-1; i>=0; i--){
            bNum += num[i];
        }

        if (bNum == num){
            return true;
        } else {
            return false;
        }
    }

    for (let k=0; k<arr.length; k++){
        console.log(palindromeChecker(arr[k]));
    }
}