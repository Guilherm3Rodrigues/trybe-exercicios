let custoProduto = 10;
let valorVenda = 25;
let imposto = valorVenda * 0.2;
let lucro = valorVenda - imposto;
let unidadesVendidas = 1000;


    
 if (valorVenda < 0 || custoProduto < 0 || unidadesVendidas < 0 ) {
    console.log("Valores invalidos");
 } else {
    console.log(unidadesVendidas * lucro);
 }