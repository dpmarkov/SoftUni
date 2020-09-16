function login(input){
    let user = input[0];
    let password = "";
    let isCorrect = false;
    let blocked = false;

    for (i=user.length-1; i>=0; i--){
        password += user[i];
    }

    for(k=1; k<=input.length; k++){
        if (input[k] == password){
            isCorrect = true;
            console.log(`User ${user} logged in.`)
            break;
        } else {
            if (k == 4){
                console.log(`User ${user} blocked!`)
                blocked = true;
            } else {
                console.log("Incorrect password. Try again.")
            }
        }

        if (blocked){
            break;
        }
    }
}