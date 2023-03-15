// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem vinda, ' + info.personagem);

//   info.recorrente = 'sim';

//     let cloneInfo = {}

//     Object.assign(cloneInfo, info);

//         cloneInfo.personagem = 'Tio Patinhas';
//         cloneInfo.origem = `Christmas on Bear Mountain, Dell's Four Color Comics #178`;
//         cloneInfo.nota = 'O último MacPatinhas';
//         cloneInfo.recorrente = 'sim';
        


//     for (const key in info) {

//             if (key === 'recorrente' &&
//                 info[key] === 'sim' &&
//                 cloneInfo[key] === 'sim') {
//                 console.log(key + ' : ' + 'Ambos Recorrentes');
//             } else {
//                 console.log(key + ' : ' + info[key] + ' e ' + cloneInfo[key]);
//             }
            
//         }
    
        






// ============================ PARTE 2 ======================================================== //

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
    ],
  };


  // faça o passo a passo antes de fazer a função
  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
  ) 

  
 

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


  


console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome}, se chama ${leitor.livrosFavoritos[0].titulo} e ${leitor.livrosFavoritos[1].titulo}`);

  


  



