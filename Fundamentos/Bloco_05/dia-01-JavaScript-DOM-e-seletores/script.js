/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


let changeP = document.getElementsByTagName("p")[1];
    changeP.innerText = "Sendo um desenvolvedor full-stack, atuando em alguma empresa."

let changeYellow = document.getElementsByClassName("main-content")[0];
    changeYellow.style.backgroundColor = "rgb(76,164,109)"

let changeRed = document.getElementsByClassName("center-content")[0];
    changeRed.style.backgroundColor = "white"
    
let changeH1 = document.getElementsByTagName("h1")[0];
    changeH1.innerText = "Exercício 5.1 - JavaScript"    

let changeLowerCase = document.getElementsByTagName("p");

    for (let index = 0; index < changeLowerCase.length; index += 1){
    
        changeLowerCase[index] = changeLowerCase[index].style.textTransform = "uppercase";
        console.log(changeLowerCase[index].innerHTML);

}

