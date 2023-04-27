/*Encriptar*/
function encryptText() {
    const typeText = document.getElementById('typeText').value;
    const result = document.getElementById('result');
    let encryptedText = '';

    const regex = /^[a-z\s]+$/;

    if (!regex.test(typeText)) {
        Swal.fire({
            text: 'Introducir solo minusculas y sin caracteres especiales',
            icon: 'warning',
            width: '50%',
        });
        return;

    }

    for (let i = 0; i < typeText.length; i++) {
        if (typeText[i] === ' ') {
            encryptedText += ' ';
            continue;
        }

        switch (typeText[i]) {
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'a':
                encryptedText += 'ai';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += typeText[i];
                break;
        }
    }

    result.value = encryptedText;
    showResult();

    // mostrar la hideSection cuando usuario presiona el boton encrypt
    const hideSection = document.querySelector('.hide-section');
    if (typeText.trim() === '') {
        hideSection.style.display = 'flex';
    } else {
        hideSection.style.display = 'none';
    }
}

/*Desencriptar*/
function decryptText() {
    /*const decryptText = () => {*/
    const encryptedText = document.getElementById('result').value;
    const decryptedText = encryptedText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('result').value = decryptedText;
}

/*Borrar contenido de result cuando usuario borra en typeText*/
function clearResult() {
    const typeText = document.getElementById('typeText');
    const result = document.getElementById('result');

    if (typeText.value === '') {
        result.value = '';
    }
};

/*copiar texto encriptado*/
function copyText() {
    const result = document.getElementById('result');
    result.select();
    document.execCommand('copy');
    result.value = '';

    // mostrar 'copiado con exito'
    const copyButton = document.getElementById('copy');
    copyButton.innerHTML = 'Copiado con exito!';
    setTimeout(() => {
        copyButton.innerHTML = 'Copy';
    }, 3000);

};

//Mostrar area de resultado 
function showResult() {
    const resultSection = document.querySelector('.result');
    resultSection.style.display = 'block';
}