// const pizzas = {

//     sabor: 'Palmito',
//     preco: 39.90,
//     bordaCatupiry: true

// };

// for (const key in pizzas) {
   
//     console.log(pizzas[key]);
        
//     }

    // const pizzasDoces = ['chocolate' , 'leite condensado', 'xablau'];

    // for (const key in pizzasDoces) {
        
    //     console.log(key, pizzasDoces[key]);

            
    //     }
    
    // let names = {
    //     person1: 'João',
    //     person2: 'Maria',
    //     person3: 'Jorge',
    //   };

    //   for (const welcome in names) {

    //     console.log('Olá ' + names[welcome]);
        
    //   }


    // let car = {
    //     model: 'A3 Sedan',
    //     manufacturer: 'Audi',
    //     year: 2020
    //   };

    //   for (const key in car) {
        
    //     console.log(key + ' : ' + car[key]);
            
    //     }
      

    let student = {

        
        
    };

    function addProperty(object, key, value) {
        
        student[key] = value;

    };
      

    addProperty(student, 'name', 'guilherme');
    addProperty(student, 'lastName', 'rodrigues');
    addProperty(student, 'email', 'guilherme.rodrigues2@live.com');
    addProperty(student, 'gitHub', 'guilherm3rodrigues');
    addProperty(student, 'LinkedIn', 'Guilherme Rodrigues');


    console.log(student);