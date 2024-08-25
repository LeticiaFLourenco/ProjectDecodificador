function encryptText() {
  let inputText = document.getElementById("input-text").value;
  if (inputText === "") {
    alert("Por favor, insira um texto para criptografar.");
    return;
  }
  let encryptedText = inputText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  localStorage.setItem("encodedText", encryptedText);
  window.location.href = "result.html";
}

function decryptText() {
  let inputText = document.getElementById("input-text").value;
  if (inputText === "") {
    alert("Por favor, insira um texto para descriptografar.");
    return;
  }

  let decryptedText = inputText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  localStorage.setItem("encodedText", decryptedText);
  window.location.href = "result.html";
}
function copyToClipboard() {
  let textToCopy = document.querySelector(
    ".lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-orci-montes-sit-et-diam-risus-scelerisque-vitae-est-tortor-maecenas-nunc-ut-laoreet-eget-diam-mauris-quam-quisque-ut-eget-fringilla-sit-elit-libero-sodales-duis-fames-id-diam-feugiat-aliquet-non-egestas-1"
  ).innerText;

  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  alert("Texto copiado para a área de transferência!");
}
function goToIndex() {
  window.location.href = "index.html";
}
