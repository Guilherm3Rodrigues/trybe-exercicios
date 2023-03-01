// let clientesCadastrados = ['ada', 'leon', 'wesker'];
// const sorvetes = ['chocolate', 'baunilha', 'flocus'];




// function validacaoDados(nome, sabor) {

//     let existeCliente = validacaoClientes(nome);
//     let existeSabor = validacaoSabor(sabor);
    
//     if (existeCliente && existeSabor) {
//         console.log(nome + ' vc acaba de comprar um sorvete de ' + sabor);
//     }

    
//     if (!existeCliente) {
//         if (existeSabor) {
//             console.log('cliente não cadastrado, mas o sorvete ' + sabor + ' está no estoque');
//         } else {
//             console.log('cliente ' + nome + ' nao cadastrado, e não temos sorvete de: ' +sabor);
//         }
//     } else {
//         if (!existeSabor) {
//             console.log(nome + ', sintimos muito, mas não temos sorvete de: ' + sabor);
//         }
//     }
// }

// function validacaoClientes(nome) {
//     let cliente = false;


//     for (let index = 0; index < clientesCadastrados.length; index += 1) {

//         if (clientesCadastrados[index] === nome) {
//             cliente = true;
            
//             break;
//         }
//     }
    
//     return cliente;
// }

// function validacaoSabor(sabor) {
//     let saborSorvete = false;

//     for (let index = 0; index < clientesCadastrados.length; index += 1) {

//         if (sorvetes[index] === sabor) {

//             saborSorvete = true;
            
//             break;
//         }
//     }
    
//     return saborSorvete;
// }


// validacaoDados('adaa', 'baunilha');



let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let find;
let indexClient;

console.log('lista de clientes: ' + clientesTrybeBank);

// ===================================================== Função Cadastrar clientes


function cadastrarClientes (nome) {

    if (typeof nome === 'string') {

    clientesTrybeBank.push(nome);
    console.log('clientes cadastrados: ' + clientesTrybeBank);
    } else {
        console.log('Caracteres invalidos, impossivel cadastrar cliente');
    }


}

cadastrarClientes('leon');

// =================================================== Função remover clientes

function removerClientes (nome) {

    let clientValid = searchList(nome);

    if (clientValid === true) {

            clientesTrybeBank.splice(indexClient, 1);
            console.log('Cliente: ' + nome + ' removido');
            
        } else {
            console.log('Impossivel remover cliente não cadastrado');
        }
           
       console.log('lista de clientes após remoção: ' + clientesTrybeBank);
       
}

// ================================================ Função para validação de clientes na lista

function searchList(nome) {
    
        if (clientesTrybeBank.includes(nome)) {
            indexClient = clientesTrybeBank.indexOf(nome);
            return true;
        } else {
            return 'cliente nao encontrado';
        }
      
   
    // for (let index = 0; index < clientesTrybeBank.length; index+=1) {
        
    //     if (clientesTrybeBank[index] === nome) {
    //         find = true;
    //         indexClient = index;
    //         console.log('Encontrado cliente: ' + nome);
    //         break;
    //     } else if ((clientesTrybeBank.length - 1) <= index){
    //         console.log('cliente não encontrado');
    //         } 
}





removerClientes('Gus');



