// let lotteryNumbers = [];

// for (let index = 1; index <= 60; index+= 1) {
//     lotteryNumbers.push(index)

// }

// console.log(lotteryNumbers);

let lotteryNumbers = [];
let firstGame = [];
let numberOfHits = 0;
let numbersWins = [];



function generateLotteryNumbers(quantity, maxNumber, array) {
    
    for (let index = 0; index < quantity; index += 1) {
        let randomNumber = Math.ceil(Math.random() * maxNumber);
    
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        } else {
            index -= 1;
        }
    }
    
}

generateLotteryNumbers(6, 60, lotteryNumbers);
generateLotteryNumbers(6, 60, firstGame);


for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {

    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {

        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            numberOfHits += 1;
            numbersWins += firstGame[indexGame];


        }


    }
}


console.log('numeros da loteria: ' + lotteryNumbers);
console.log('voce acertou o numero: ' + numbersWins ,);
console.log('numero de acertos totais: ' + numberOfHits);
console.log('seus numeros escolhidos: ' + firstGame);

