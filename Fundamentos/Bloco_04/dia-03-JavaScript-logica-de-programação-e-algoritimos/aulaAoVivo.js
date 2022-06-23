
let soma = 0;

for(let i=50; i>0; i-= 1){
    soma += i;
}

console.log('A soma total de 1 a 50 é: ' + soma);

console.log('+-----------------------------------------------proximo exercicio-------------------------------------------+');

let contagem = 0;

for(let i=150; i>1; i-= 1){
    if( i % 3 === 0){
        contagem = contagem + 1
    }
}
if(contagem === 50){
    console.log('Deu certo!!!')
}

console.log('+-----------------------------------------------proximo exercicio-------------------------------------------+');


let idade = 24;

if(idade >= 18){
    console.log('A pessoa é maior de idade')
}
else{
    console.log('A pessoa é menor de idade')
}

console.log('+-----------------------------------------------proximo exercicio-------------------------------------------+');



let Carolzita = 26;
let Murilo = 12;
let Baeta = 64;

if(Carolzita < Murilo && Carolzita < Baeta){
    console.log('Carolzita é a mais nova.')
} else if(Murilo < Carolzita && Murilo < Baeta){
    console.log('Murilo é o mais nova.')
}else{
    console.log('Baeta é a mais nova.')
}


console.log('+-----------------------------------------------proximo exercicio-------------------------------------------+');


let person1 = 'scissors';
let person2 = 'stone';

if (person1 === 'paper' && person2 == 'stone'){
   console.log('Player 1 won');
} else if (person1 === 'stone' && person2 === 'scissors'){
   console.log('Player 1 won');
} else if (person1 === 'scissors' && person2 === 'paper'){
    console.log('Player 1 won');
} else if (person1 === person2){
    console.log('A Ties');
} else{
   console.log('Player 2 won');
}