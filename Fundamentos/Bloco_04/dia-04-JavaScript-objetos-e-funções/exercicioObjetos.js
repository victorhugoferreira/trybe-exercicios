let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos',
    recorrente: 'sim'
};

console.log('Bem vinda, ' + info.personagem);

for (let index in info){
    console.log(index);
};

for (let index in info){
    console.log(info[index]);
};

console.log('+-----------------------------proximo exercicio-----------------------------+');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

  console.log(leitor.nome + ' tem 2 livros favoritos, ' + leitor.livrosFavoritos[0].titulo + ' e '+ leitor.livrosFavoritos[1].titulo + '.');