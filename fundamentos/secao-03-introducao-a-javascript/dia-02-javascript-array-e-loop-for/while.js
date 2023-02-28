

let d1 = Math.ceil(Math.random() * 6);
console.log("dado 01: " + d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
    
    d2 = Math.ceil(Math.random() * 6);
    
    console.log("dado 02: " + d2);
}

console.log("RESULTADO--- dado 1 : " + d1 + " dado 2 : " + d2);

console.log("Fim do loop");