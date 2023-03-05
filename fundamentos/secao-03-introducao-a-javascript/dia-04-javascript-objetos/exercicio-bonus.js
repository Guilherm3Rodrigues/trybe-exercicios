let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
  

  // ======================================================

function addKey(Object, key, value) {

    return Object[key] = value;
}

  addKey(lesson2, 'turno', 'noite');
  

  // ======================================================

function listKeys(Objeto) {

    return Object.keys(Objeto);
}


    listKeys(lesson1)


  // ======================================================

function howBigObject(Objeto) {
let array = Object.keys(Objeto);

    return array.length;
}


howBigObject(lesson3)


  // ======================================================

  const valuesObject = (objeto) => { return Object.values(objeto) }


valuesObject(lesson1)


 // ======================================================

    const object1 = {lesson1};
    const object2 = {lesson2};
    const object3 = {lesson3};

    let allLessons = Object.assign({}, object1, object2, object3);


    // Object.assign(allLessons, lesson1);
    // Object.assign(allLessons, lesson2);
    // Object.assign(allLessons, lesson3);

    


  // ======================================================


const array = Object.entries(allLessons);


     

  

  function allStudents(object, valueStudents) {
    const array = Object.values(allLessons);
    let totalStudents = 0;
    for (let index = 0; index < array.length; index+= 1) {
        
        totalStudents += array[index].numeroEstudantes;
        
    }

    
    return totalStudents;
    
  }

  allStudents(allLessons, 'numeroEstudantes');

