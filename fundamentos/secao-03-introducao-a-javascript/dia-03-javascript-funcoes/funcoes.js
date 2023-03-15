let saldo = 200;
let saldo1 = 200;
let saldo2 = 200;
let saldo3 = 200;


function contaBAnk1(depositar) {

    return saldo += depositar;
    
}


function contaBAnk2(sacar) {

    return saldo1 -= sacar;
    
}


function contaBAnk3(multiplica) {

    return saldo2 *= multiplica;
    
}


function contaBAnk4(divide) {

    return saldo3 /= divide;
    
}

contaBAnk1(500);
contaBAnk2(50);
contaBAnk3(3);
contaBAnk4(2);

console.log(saldo);
console.log(saldo1);
console.log(saldo2);
console.log(saldo3);


