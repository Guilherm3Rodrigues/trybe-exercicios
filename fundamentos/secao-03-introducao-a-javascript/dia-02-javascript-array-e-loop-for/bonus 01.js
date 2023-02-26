let array = [5, 3, 2, 4, 7, 1, 0, 6]






// primeiro, como comparar e trocar 2 numeros de posição
// segundo, como repetir o processo passando por todos os numeros da lista
// terceiro, evitar repetições desnecessarias

for (let i2 = 0; i2 < array.length - 1; i2+= 1) {
    
console.log("I2===============: " + i2);
  for (let i = 0; i < array.length - i2; i+= 1) {
    
        if (array[i] > array[i+1]) {
            console.log("primeiro: " + array[i]);
            console.log("segundo: " + array[i+1]);

            const temp = array[i + 1];
            console.log("temporaria: " + temp);
            
            array[i+1] = array[i];


            array[i] = temp;
        }   else {
            console.log("já em ordem");
        }
        console.log(array);
  }
}