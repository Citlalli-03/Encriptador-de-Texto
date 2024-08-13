function shiftChar(c, shift) {
    if (c >= 'a' && c <= 'z') {
        return String.fromCharCode(((c.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
    } else if (c >= 'A' && c <= 'Z') {
        return String.fromCharCode(((c.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
    } else {
        return c; // No modificar caracteres no alfabéticos
    }
}

function encryptText() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    const encryptedText = text.split('').map(c => shiftChar(c, shift)).join('');
    document.getElementById('result').value = encryptedText;
}

function decryptText() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    const decryptedText = text.split('').map(c => shiftChar(c, -shift)).join('');
    document.getElementById('result').value = decryptedText;
}
