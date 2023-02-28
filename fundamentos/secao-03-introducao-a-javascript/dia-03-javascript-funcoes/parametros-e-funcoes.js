// let clientesCadastrados = ['ada', 'leon', 'wesker'];
// const sorvetes = ['chocolate', 'baunilha', 'flocus'];

// function validacaoDados(nome, sabor) {
//     let cliente = false;
//     let saborSorvete = false;

//     for (let index = 0; index < clientesCadastrados.length; index += 1) {

//         if (clientesCadastrados[index] === nome) {
//             cliente = true;
//             console.log("cliente cadastrado: " + nome);
//             break;
//         }
//     }

//     for (let index = 0; index < clientesCadastrados.length; index += 1) {

//         if (sorvetes[index] === sabor) {

//             saborSorvete = true;
//             console.log("temos sorvete sabor: " + sabor);
//             break;
//         }
//     }

//     if (cliente === false) {
//         if (saborSorvete === true) {
//             console.log('cliente não cadastrado');
//         } else {
//             console.log('cliente nao cadastrado, e não temos esse sorvete');
//         }
//     } else {
//         if (saborSorvete === false) {
//             console.log('não temos esse sorvete');
//         }
//     }
// }
// validacaoDados('leon', 'flocus');


let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function cadastrarClientes (nome) {



    clientesTrybeBank.push(nome);
    console.log(clientesTrybeBank);

}

cadastrarClientes('leon');

function removerClientes (nome) {


    for (let index = 0; index < clientesTrybeBank.length; index+=1) {
        
        if (clientesTrybeBank[index] === nome) {

            clientesTrybeBank.splice(index, 1);

        }
        
    }
       console.log(clientesTrybeBank);   
    
}

removerClientes('Gus');


