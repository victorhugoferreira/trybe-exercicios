let palavra = 'arara';
let palavraContrario = ''

for(let i=(palavra.length)-1; i > -1; i -= 1){
    palavraContrario = palavraContrario + palavra[i];
}

console.log(palavraContrario);