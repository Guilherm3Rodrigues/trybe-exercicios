let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];

// console.log("Menu de sabores: " + pizzas);

pizzas.push("calabresa");

// console.log("Menu de sabores: " + pizzas);

// console.log(pizzas.sort());

// console.log(pizzas[1]); // --------------> devido o sort, a posição das pizzas muda.

for (let i = 0; i < pizzas.length; i+=1) {

    console.log(pizzas[i]);

}