// function contaWords(frase) {
    
//     return frase.split(' ').length;
// }

// console.log(
//     contaWords('fala trybo, beleza?')
// );

// function objectPerson(nome, idade) {

//     return {
//         nome: nome,
//         idade: idade
//     }
    
// }

// console.log(
//     objectPerson('thor' , 25)
// );

const objectPerson = (name, age) => ({nome: name, idade: age});

console.log(objectPerson('gui', 25));