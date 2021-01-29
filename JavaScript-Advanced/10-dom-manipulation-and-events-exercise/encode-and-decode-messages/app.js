function encodeAndDecodeMessages() {
    const buttonEncode = document.querySelectorAll('button')[0];
    const buttonDecode = document.querySelectorAll('button')[1];
    const textEncodeElm = document.querySelectorAll('textarea')[0];
    const textDecodeElm = document.querySelectorAll('textarea')[1];

    buttonEncode.addEventListener('click', buttonEncodeClick);
    buttonDecode.addEventListener('click', buttonDecodeClick);

    function buttonEncodeClick () {
        let textToEncode = textEncodeElm.value;
        let encodedText = '';

        for (let char of textToEncode){
            encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        textEncodeElm.value = '';
        textDecodeElm.value = encodedText;
    }

    function buttonDecodeClick () {
        let textToDecode = textDecodeElm.value;
        let decodedText = '';

        for (let char of textToDecode){
            decodedText += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        textDecodeElm.value = decodedText;
    }
}