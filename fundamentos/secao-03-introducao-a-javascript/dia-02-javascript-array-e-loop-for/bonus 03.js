let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//novo array igual o primeiro

let array2 = [];

console.log(array2);

// cada valor sera a multiplicação do elemento x o elemento da frente
//- necessario selecionar 2 elementos






for (let i = 0; i < array.length; i += 1) {

    if (array[i] * array[i + 1] > 0) {

        array2[i] = array[i] * array[i + 1];

    } else {
        array2[i] = array[i] + array[i];
    }

}

console.log(array2);
console.log(array);