//exercicio 02

let numberONE = 70;
let numberTWO = 420;
let numberThree = 2000;


if (numberONE > numberTWO && numberONE > numberThree) {
    console.log("O primeiro numero: '" + numberONE + "' é maior que o segundo numero: '" + numberTWO + "' e o terceiro: " + numberThree + "'");    
} 
else if (numberTWO > numberONE && numberTWO > numberThree) {
    console.log("O segundo numero: '" + numberTWO + "' é maior que o primeiro numero: '" + numberONE + "' e o terceiro: " + numberThree + "'");
} else {
    console.log("O terceiro numero: '" + numberThree + "' é maior que o primeiro numero: '" + numberONE + "' e o segundo: " + numberTWO + "'");
}
