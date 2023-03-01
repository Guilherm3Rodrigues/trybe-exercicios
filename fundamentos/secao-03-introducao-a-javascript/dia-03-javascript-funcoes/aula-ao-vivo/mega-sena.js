// let lotteryNumbers = [];

// for (let index = 1; index <= 60; index+= 1) {
//     lotteryNumbers.push(index)

// }

// console.log(lotteryNumbers);

 let lotteryNumbers = [];
 let firstGame = [16, 8, 60, 5, 7, 30]; 
 let numberOfHits = 0;
 let numbersWins = [];

    for (let index = 0; index < 6; index+= 1) {
        let randomNumber = Math.ceil(Math.random() * 60);
        
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber);
        } else {
            index -= 1;
        }
      


}
for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery +=1 ) {
    
    for (let indexGame = 0; indexGame < firstGame.length; indexGame +=1) {
   
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            numberOfHits +=1;
            numbersWins += firstGame[indexGame];
            

        } 
  
    
}
}


console.log('numeros da loteria: ' + lotteryNumbers);
console.log('voce acertou o numero: ' + numbersWins );
console.log('numero de acertos totais: ' + numberOfHits);
console.log('seus numeros escolhidos: ' + firstGame);

