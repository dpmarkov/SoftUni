function passwordValidator(password){
    password = password.toString();
    let isValid = true;

    if (password.length < 6 || password.length > 10){
        isValid = false;
        console.log("Password must be between 6 and 10 characters");  
    }

    if (!lettersDigits()){
        isValid = false;
        console.log("Password must consist only of letters and digits"); 
    }

    if (!minDigits()){
        isValid = false;
        console.log("Password must have at least 2 digits"); 
    }

    if (isValid){
        console.log("Password is valid");
    }
    
    function minDigits(){
        let counter = 0; //2 digits minimum

        for (let i=0; i<password.length; i++){
            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57){
                counter++;
            }
        }

        if (counter >= 2){
            return true;
        } else {
            return false;
        }
    }

    function lettersDigits(){
        let incorrectSymbol = false;

        for (let i=0; i<password.length; i++){
            let ascii = password[i].charCodeAt(0);

            if (!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57))){
                incorrectSymbol = true;
            }
        }

        if (incorrectSymbol){
            return false;
        } else {
            return true;
        }
    }
}