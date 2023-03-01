let numbers = [5, 10, 27, 31, 99];
let checkNumber = 30;
       
// if(numbers.includes(checkNumber)) {
//        console.log(numbers.indexOf(checkNumber));
//         } else {
//             console.log("Elemento não encontrado no array");
//         }

let indexNumber = false;


for (let index = 0; index < numbers.length; index+=1) {

    if (numbers[index] === checkNumber) {
        console.log('Nº index é: ' + index);
        break;
    } else if ((numbers.length - 1) > index){
        null;
    } else {
        console.log("Elemento nao encontrado no array");
    }
}
   
