let number = 5;
let impressao = "";
let asterisco = "*";
let space = number;

if (number > 1) {


// copiei do gabarito, entendi a logica, mas nao a fiz =/
    


    for (let index = 0; index <= number; index+=1) {
        for (let i = 0; i < number; i+=1) {
            
            if (i < space) {
                impressao += " ";
            } else {
                impressao += asterisco;
            }
            
        }
             
        console.log(impressao);
        impressao = "";
        space -= 1;

    }


    

}