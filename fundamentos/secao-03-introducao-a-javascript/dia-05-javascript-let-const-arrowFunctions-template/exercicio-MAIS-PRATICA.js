//=========================================== Question ONE ====================//
// carStatus = false;

// function check(carStatus) {

//     if (carStatus === true) {
//         carStatus = false;
//         return 'desliga carro';
//     } else {
//         carStatus = true;
//         return 'liga carro';
//     }
// }
// console.log(
// check(carStatus)
// );

//=========================================== Question TWO ====================//

// const areaCircle = (raio) => {
// const pi = 3.14;

// return pi * (raio * raio);

// }
// console.log(
// areaCircle(7)
// );

//=========================================== Question THREE ====================//

const longestWord = 'Eu estudo na Trybe com muita dedicação' // retorna 'aconteceu'

const array = longestWord.split(' ');

let biggestWord = array[0];

for (const comparator of array) {
    
    if (comparator.length > biggestWord.length) {
        biggestWord = comparator;
    } 

};

console.log(biggestWord);

//=========================================== BONUS ====================//

// const longestWord = 'Eu estudo na Trybe com muita dedicação' // retorna 'aconteceu'

// const array = Object.keys(longestWord);

// console.log(array);

// let biggestWord = array[0];

// for (const comparator of array) {
    
//     if (comparator.length > biggestWord.length) {
//         biggestWord = comparator;
//     } 

// }

// console.log(biggestWord);

