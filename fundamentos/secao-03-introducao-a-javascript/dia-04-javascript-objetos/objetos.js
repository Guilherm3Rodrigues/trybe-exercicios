// let name = 'Foo';
// let lastNAme = 'Fighters'


// let band = {
//     name:  'Foo',
//     lastName: 'Fighters',
//     nickName: 'Band Legal',
//     age: 17,
//     bestAlbuns: ['Hypnose', 'Fly', 'Best of You'],
//     bornInfo: {
//         city: 'New York',
//         state: 'jackson'
//     }
    
// };

// console.log('informações de nascimento:  frisando, cidade de: ' + band.bornInfo.city + ' estado de: ' + band.bornInfo.state);


// band['fullName'] = band.name + ' ' + band.lastName;



let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
};

console.log('nome: ' + player.name + ' Sobrenome: ' + player.lastName + ' e idade: ' + player.age);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora Marta foi eleita a melhor do mundo 6 vezes ' + player['bestInTheWorld']);

console.log('A jogadora possui: ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');