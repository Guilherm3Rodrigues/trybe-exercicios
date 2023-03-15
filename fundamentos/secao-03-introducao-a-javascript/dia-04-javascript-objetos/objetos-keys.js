let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };


  function student(object) {

    let arraySkills = Object.keys(object);
    
    for (const key in arraySkills) {
        console.log('nome da habilidade: ' + key  + ' - Nivel: ' + (arraySkills[key]));
        }
  }

  console.log(student(student1));
  console.log(student(student2));
  