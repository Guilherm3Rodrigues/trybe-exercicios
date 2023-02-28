
let escolha = "Torre";

switch (escolha.toLowerCase()) {
    case "torre": console.log("A torre anda apenas em angulos retos, esquerda, direita, frente, tras, a quantidade de casas que quiser"); break;

    case "cavalo": console.log("O cavalo anda apenas em L , 3 casas a frente (ou para o lado), e uma para o lado"); break;

    case "bispo": console.log("O bispo anda apenas na vertical, a quantidade de casas que quiser");
    break;

    case "rainha": console.log("A rainha anda em qualquer direção a quantidade de casas que quiser");
    break;

    case "rei": console.log("O Rei anda em qualquer direção, mas apenas uma casa por vez");
    break;

    case "peao": console.log("O peão anda apenas para frente, uma casa por vez,");
    break;

    default: console.log("Peça invalida");
}



