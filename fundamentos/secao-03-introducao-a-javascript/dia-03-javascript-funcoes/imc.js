let idade = 29;
let sexo = 'q';
let peso = 81;
let altura = 180;

let resultadoFinal;

if (sexo === 'm') {
    resultadoFinal = ((altura * 6,25) + (peso * 9,99) - (idade * 4,92) + 5);
} else if (sexo === 'f') {
    resultadoFinal = ((altura * 6,25) + (peso * 9,99) - (idade * 4,92) - 161);
} else {
    console.log('sexo invalido, favor escolher m ou f');
}

console.log("Resultado da taxa: " + resultadoFinal);