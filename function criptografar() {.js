function criptografar() {
    let texto = document.getElementById('inputText').value;
    if (!/^[a-zA-Z\s]+$/.test(texto)) {
        alert('Por favor, insira apenas letras e espaços.');
        return;
    }

    let deslocamento = 3; // Definindo o deslocamento para 3
    let textoCriptografado = texto.replace(/[a-z]/gi, function(char) {
        let base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode((char.charCodeAt(0) - base + deslocamento) % 26 + base);
    });

    document.getElementById('outputText').innerText = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById('inputText').value;
    if (!/^[a-zA-Z\s]+$/.test(texto)) {
        alert('Por favor, insira apenas letras e espaços.');
        return;
    }

    let deslocamento = 3; // Definindo o deslocamento para 3
    let textoDescriptografado = texto.replace(/[a-z]/gi, function(char) {
        let base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode((char.charCodeAt(0) - base - deslocamento + 26) % 26 + base);
    });

    document.getElementById('outputText').innerText = textoDescriptografado;
}

function copiarTexto() {
    var outputText = document.getElementById('outputText');
    navigator.clipboard.writeText(outputText.innerText).then(() => {
        alert('Texto copiado com sucesso!');
    }, (err) => {
        alert('Falha ao copiar texto: ', err);
    });
}

