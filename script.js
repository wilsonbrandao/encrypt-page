const textArea = document.getElementById("input-text");
const result = document.getElementById("result");
const paragraph = document.getElementById("paragraph-result");
const divAside = document.getElementById("standard-aside");

textArea.onclick = () => {
    if (divAside.style.display == "none") {
        divAside.style.display = "flex";
        paragraph.textContent = "";
        result.style.display = "none";
    }
}

const buttonEncrypt = document.getElementById("button-encrypt");
buttonEncrypt.onclick = () => {
    let stringDencrypted = textArea.value.toLowerCase();
    let stringEcrypted = "";
    const regex = /[^\w\s]/;

    if(regex.test(stringDencrypted) == true) {
        divAside.style.display = "none";
        paragraph
        .textContent = "Hmmm, encontrei alguns caracteres especiais, tente retirá-los e criptografar novamente";
        result.style.display = "flex";
   }else {
       stringEcrypted = stringDencrypted.replace(/a/g, "ai")
       .replace(/e/g, "enter")
       .replace(/i/g, "imes")
       .replace(/o/g, "ober")
       .replace(/u/g, "ufat");
       divAside.style.display = "none";
       paragraph.textContent = stringEcrypted;
       result.style.display = "flex";
    }
}

const buttonDecrypt = document.getElementById("button-decrypt");
buttonDecrypt.onclick = () => {
    let stringEncrypted = textArea.value.toLowerCase();
    let stringDecrypted = "";

    stringDecrypted = stringEncrypted.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    divAside.style.display = "none";
    paragraph.textContent = stringDecrypted;
    result.style.display = "flex";
};

const buttonCopy = document.getElementById("button-copy");
buttonCopy.onclick = () => navigator.clipboard.writeText(paragraph.textContent);