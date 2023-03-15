const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

let teste = 'ACcV'



let array;

    array = Object.values(teste)



for (let index = 0; index < array.length; index++) {

    if (array[index] === 'I' ||
        array[index] === 'V' ||
        array[index] === 'X' ||
        array[index] === 'L' ||
        array[index] === 'C' ||
        array[index] === 'D' ||
        array[index] === 'M') {

        console.log("valeu valeu");

    } else {
        console.log(`Apenas "numerais" romanos com letra MAIUSCULA, a letra "${array[index]}" não se encaixa nos requerimentos`);

        break;
    }
}

