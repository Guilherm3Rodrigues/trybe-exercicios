let nota = -1;

switch (true) {

    case (nota >= 90): console.log("O equivalente da: " + nota + " é A");
    break;

    case (nota >= 80): console.log("O equivalente da: " + nota + " é B");
    break;

    case (nota >= 70): console.log("O equivalente da: " + nota + " é C");
    break;

    case (nota >= 60): console.log("O equivalente da: " + nota + " é D");
    break;

    case (nota >= 50): console.log("O equivalente da: " + nota + " é E");
    break;

    case (nota < 50): console.log("O equivalente da: " + nota + " é F");
    break;

    default: console.log("nota invalida");

}