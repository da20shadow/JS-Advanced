function encodeAndDecodeMessages() {

    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click',encodeAndSendText);
    decodeBtn.addEventListener('click',decodeAndReadText);

    let receivedTextArea = decodeBtn.parentNode.querySelector('textarea');

    function encodeAndSendText(e){
        let textAreaToEncode = e.target.parentNode.querySelector('textarea');

        let encodedText = '';
        let textToEncode = textAreaToEncode.value.trim();
        let lengthText = textToEncode.length;

        for (let i = 0; i < lengthText; i++) {
            let charCode = textToEncode[i].charCodeAt(0) + 1;
            let newChar = String.fromCharCode(charCode);
            encodedText += newChar;
        }
        receivedTextArea.value = encodedText;

        textAreaToEncode.value = '';
    }
    function decodeAndReadText(e){
        let textAreaToDecode = e.target.parentNode.querySelector('textarea');
        let textToDecode = textAreaToDecode.value.trim();

        let decodedText = '';
        let lengthText = textToDecode.length;

        for (let i = 0; i < lengthText; i++) {
            let charCode = textToDecode[i].charCodeAt(0) - 1;
            let newChar = String.fromCharCode(charCode);
            decodedText += newChar;
        }
        textAreaToDecode.value = decodedText;
    }
}