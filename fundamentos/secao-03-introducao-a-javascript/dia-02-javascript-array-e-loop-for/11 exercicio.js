let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";


for (let index = 0; index < array.length; index+= 1) {
    
    
    if (array[index].length > maior.length) {
        maior = array[index];
        
    }
}

console.log("Maior word: " + maior);

for (let index = 0; index < array.length; index+= 1) {
    
    
    if (array[index].length < menor.length) {
        menor = array[index];
        
    }
}

console.log("menor word: " + menor);