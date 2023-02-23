let angulo1 = 60;
let angulo2 = 60;
let angulo3 = -61;

let somaAngulos = angulo1 + angulo2 + angulo3;
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro, angulo invalido");
}