let saldo = 200;
let saldo1 = 200;
let saldo2 = 200;
let saldo3 = 200;


function contaBAnk1(depositar) {

    if (depositar > 0) {
    return saldo += depositar;
    } else {
        console.log('Valor invalido');
    }
}


function contaBAnk2(sacar) {

    if (sacar <= saldo) {
    return saldo1 -= sacar;
    } else {
        console.log('Saldo insuficiente');
    }
}


function contaBAnk3(multiplica) {

    if (multiplica > 0) {
    return saldo2 *= multiplica;
    } else {
        console.log('Valor Invalido');
    }
} 


function contaBAnk4(divide) {

    if ( divide > 0) {
    return saldo3 /= divide;
    } else {
        console.log('Valor invalido');
    }
}

contaBAnk1(500);
contaBAnk2(50);
contaBAnk3(3);
contaBAnk4(2);

console.log(saldo);
console.log(saldo1);
console.log(saldo2);
console.log(saldo3);


