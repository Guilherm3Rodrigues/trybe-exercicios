let clientesCadastrados = ['ada', 'leon', 'wesker'];
const sorvetes = ['chocolate', 'baunilha', 'flocus'];




function validacaoDados(nome, sabor) {

    let existeCliente = validacaoClientes(nome);
    let existeSabor = validacaoSabor(sabor);
    
    if (existeCliente && existeSabor) {
        console.log(nome + ' vc acaba de comprar um sorvete de ' + sabor);
    }

    
    if (!existeCliente) {
        if (existeSabor) {
            console.log('cliente não cadastrado, mas o sorvete ' + sabor + ' está no estoque');
        } else {
            console.log('cliente ' + nome + ' nao cadastrado, e não temos sorvete de: ' +sabor);
        }
    } else {
        if (!existeSabor) {
            console.log(nome + ', sintimos muito, mas não temos sorvete de: ' + sabor);
        }
    }
}

function validacaoClientes(nome) {
    let cliente = false;


    for (let index = 0; index < clientesCadastrados.length; index += 1) {

        if (clientesCadastrados[index] === nome) {
            cliente = true;
            
            break;
        }
    }
    
    return cliente;
}

function validacaoSabor(sabor) {
    let saborSorvete = false;

    for (let index = 0; index < clientesCadastrados.length; index += 1) {

        if (sorvetes[index] === sabor) {

            saborSorvete = true;
            
            break;
        }
    }
    
    return saborSorvete;
}


validacaoDados('adaa', 'baunilha');



// let clientesTrybeBank = ['Ada', 'John', 'Gus'];


// function cadastrarClientes (nome) {



//     clientesTrybeBank.push(nome);
//     console.log(clientesTrybeBank);

// }

// cadastrarClientes('leon');

// function removerClientes (nome) {


//     for (let index = 0; index < clientesTrybeBank.length; index+=1) {
        
//         if (clientesTrybeBank[index] === nome) {

//             clientesTrybeBank.splice(index, 1);

//         }
        
//     }
//        console.log(clientesTrybeBank);   
    
// }

// removerClientes('Gus');


