function passwordGenerator(input) {
    let twoStrings = "" + input[0] + input[1];
    let replaceString = input[2];
    let counter = 0;
    let password = "";

    for (let char of twoStrings){
        if (isLetterAVowel(char)){
            if (counter == replaceString.length){
                counter = 0;
            }

            password += replaceString[counter].toUpperCase();
            counter++;
        } else {
            password += char;
        }
    }

    password = reverseString(password);

    console.log("Your generated password is " + password);

    function isLetterAVowel(letter) {
        letter = letter.toLowerCase();

        if (letter == "a" || letter == "e" || letter == "i" ||
         letter == "o" || letter == "u"){
            return true;
        } else {
            return false;
        }
    }

    function reverseString(str){
        let reversedStr = "";

        for (let i = str.length-1; i>=0; i--){
            reversedStr += str[i];
        }

        return reversedStr;
    }
}

passwordGenerator(
    [
        'ilovepizza', 'ihatevegetables',
        'orange'
    ]  
)

console.log('----------------');

passwordGenerator(
    [
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]        
)

console.log('----------------');

passwordGenerator(
    [
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
)