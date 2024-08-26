document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const muneco = document.querySelector(".image__container img");
    const text1 = document.getElementById("info__text1");
    const text2 = document.getElementById("info__text2");
    const textResult = document.querySelector(".result__text");
    const containerResult = document.querySelectorAll(".hidden");
    const copyButton = document.getElementById("btn__copy");

    // Función para encriptar texto
    const encryptText = (text) => {
        const codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        return codeMatrix.reduce((acc, [char, code]) => acc.replaceAll(char, code), text.toLowerCase());
    };

    // Función para desencriptar texto
    const decryptText = (text) => {
        const codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        return codeMatrix.reduce((acc, [char, code]) => acc.replaceAll(code, char), text.toLowerCase());
    };

    // Función para ocultar elementos iniciales y mostrar el resultado
    const toggleVisibility = () => {
        muneco.classList.add("hidden");
        text1.classList.add("hidden");
        text2.classList.add("hidden");
        containerResult.forEach(element => element.classList.remove("hidden"));
    };

    // Maneja el evento de encriptar
    document.getElementById("btn__encrypt").addEventListener('click', () => {
        const inputText = document.getElementById("input__text").value;
        if (inputText.trim()) {
            const encryptedText = encryptText(inputText);
            textResult.textContent = encryptedText;
            toggleVisibility();
            document.getElementById("input__text").value = "";
            copyButton.innerText = "Copiar";
        }
    });

    // Maneja el evento de desencriptar
    document.getElementById("btn__decrypt").addEventListener('click', () => {
        const inputText = document.getElementById("input__text").value;
        if (inputText.trim()) {
            const decryptedText = decryptText(inputText);
            textResult.textContent = decryptedText;
            toggleVisibility();
            document.getElementById("input__text").value = "";
            copyButton.innerText = "Copiar";
        }
    });

    // Copiar al portapapeles
    copyButton.addEventListener('click', () => {
        const tempInput = document.createElement("input");
        tempInput.value = textResult.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        copyButton.innerText = "¡Ha sido copiado!";
    });
});