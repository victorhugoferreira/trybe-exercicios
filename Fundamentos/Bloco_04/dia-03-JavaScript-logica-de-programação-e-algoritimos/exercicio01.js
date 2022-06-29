let fatorial10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let resultado = 1;

for (let i=0; i < fatorial10.length; i+= 1){
    resultado = resultado * fatorial10[i];
}
console.log(resultado);