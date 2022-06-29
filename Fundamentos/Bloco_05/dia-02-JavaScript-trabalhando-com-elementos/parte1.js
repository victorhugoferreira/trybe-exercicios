let element = document.querySelector("#elementoOndeVoceEsta");

let elementPai = document.querySelector("#elementoOndeVoceEsta").parentNode;
    element.style.color = "green"

let primeiroFilhoDoFilho = element.firstElementChild;
    primeiroFilhoDoFilho.innerHTML = "<h1> A vida é bela igual rosa cheira.</h1>"

let primeiroFilho = document.querySelector("#pai").firstElementChild;

let primeiroFilho2 = element.previousSibling;

let textPai = element.nextSibling;

let terceiroFilho = element.nextElementSibling;

let terceiroFilho2 = elementPai.lastElementChild.previousElementSibling;

console.log(primeiroFilho);