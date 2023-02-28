let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpares = 0;




for (let index = 0; index <= numbers.length; index+= 1) {
    
    if (numbers[index] % 2 > 0) {
        
        qtdImpares +=1;

    }
    
}

    if (qtdImpares > 0) {
        console.log("Nós temos " +qtdImpares+ " numeros impares");
    } else {
        console.log("Não há numeros impares");
    }


