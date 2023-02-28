let clientesCadastrados = ['ada', 'leon', 'wesker'];
const sorvetes = ['chocolate', 'baunilha', 'flocus'];



function validacaoDados(nome, sabor) {
    let cliente = false;
    let saborSorvete = false;

    for (let index = 0; index < clientesCadastrados.length; index+= 1) {
        
        if (clientesCadastrados[index] === nome) {
            cliente = true;
            console.log("cliente cadastrado: " + nome);
            break;
        } 
        
        
    }

    for (let index = 0; index < clientesCadastrados.length; index+= 1) {
        
        if (sorvetes[index] === sabor) {
            saborSorvete = true;
            console.log("temos sorvete sabor: " + sabor);
            break;
        }

        
        
        
    }

}

validacaoDados('leon', 'flocus');
