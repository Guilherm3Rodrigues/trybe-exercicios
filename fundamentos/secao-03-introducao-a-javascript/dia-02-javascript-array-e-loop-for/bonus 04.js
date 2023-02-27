let n = 5;
let impressao;
let asterisco = "*";

if (n > 1) {

    for (let i = 0; i < n; i += 1) {
        impressao = "";   // por ser colocada nessa posição, sempre que vai apra proxima linha a variavel é 'zerada', FORMANDO O quadrado
        for (let index = 0; index < n; index += 1) {
            impressao += asterisco;
            
        }
        console.log(impressao);
    }
    
} else {
    console.log("numero invalido");
}

