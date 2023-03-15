const randomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const students31 = {
  studentsInfo: [
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U013K7V5JGP-93cc1b1a7783-512",
      trybe: "CH31",
      student_name: "Gustavo Abreu Caetano",
      project_lessons_learned: 10000,
      project_playground_functions: 10000
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02HY56K3V1-576c178143fd-512",
      trybe: "CH31",
      student_name: "Lucas Leal",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02SH49DQUB-b22fbde163e8-512",
      trybe: "CH31",
      student_name: "Renan Leandro Fernandes",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U01UA4J9FML-a3ed66f524ec-512",
      trybe: "CH31",
      student_name: "Ana Carolina Mendes Duarte",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02SVNBPXLZ-eac72fc5ebaa-512",
      trybe: "CH31",
      student_name: "Emanuelli Zequinelli Rosa dos Santos",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02C7E7MS07-dfd764f5f8ff-512",
      trybe: "CH31",
      student_name: "Matheus Guedes Ribeiro",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02NR1BLCCT-b1e9a35faaad-512",
      trybe: "CH31",
      student_name: "Natássia Rafaelle Medeiros Siqueira",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U03A4LULS9F-2e920b87d97a-512",
      trybe: "CH31",
      student_name: "Vitor Mauricio Cardoso",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U01JXK7AV4J-45261d13fc93-512",
      trybe: "CH31",
      student_name: "Eliezer Queiroz",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    }
  ]
}

const futureProjects = {
    fundamentos:[
        {
            secao: 4,
            project_name: 'aaaaaa'

        },
        {
            secao: 5,
            project_name: 'bbbbbbb'

        },
        {
            secao: 6,
            project_name: 'ccccc'

        },
        {
            secao: 7,
            project_name: 'dddddd'

        }
    ]
}
// primeiro passo: eu crio o elemento
// segundo passo: populo elemento
// terceiro passo: onde o elemento vai ficar


const studentName = document.getElementById('name');
const gradeLessonsLearned = document.getElementById('gradeLessonsLearned');
const gradePlayground = document.getElementById('gradePlayground');
const picture = document.getElementById('picture');
const results = document.querySelector('#results');
const newProjects = document.querySelector('.future-projects');
const selectName = document.getElementById('selectName');

const getRandomStudent = () => {
  const array = students31.studentsInfo;
  const index = randomIndex(0, array.length - 1);
  
  studentName.innerHTML = `${array[index].student_name} - ${array[index].trybe}`;
  gradeLessonsLearned.innerHTML = `${array[index].project_lessons_learned}%`;
  gradePlayground.innerHTML = `${array[index].project_playground_functions}%`;
  picture.src = array[index].picture;
}

const verifyGrades = () => {
  getRandomStudent();

  if (parseInt(gradeLessonsLearned.innerHTML) >= 80 && parseInt(gradePlayground.innerHTML) >= 80) {
    results.innerHTML = 'ENTREGUE!';
    results.className = 'green';
  } else {
    results.innerHTML = 'AINDA NÃO ENTREGUE.';
    results.className = 'red';
  }
}

verifyGrades();

const createProjectsList = () => {
    const newTitle = document.createElement('h2');
    newTitle.innerHTML = 'Projetos Futuros';
    newProjects.appendChild(newTitle);

    for (const key in futureProjects) {
        const title = document.createElement('h3');
        title.innerHTML = key;
        title.style.fontSize = '30px';
        newProjects.appendChild(title);
        for (let index = 0; index < futureProjects[key].length; index+=1) {
            const newParagraph = document.createElement('p');
            const elem = futureProjects[key][index];
            newParagraph.innerHTML = elem.project_name;
            newProjects.appendChild(newParagraph);
            
        }
    }


}

createProjectsList();

const createSelect = () => {
  
  for (let index = 0; index < students31.studentsInfo.length; index+= 1) {
    
    const newOption = document.createElement('option');
    newOption.innerHTML = students31.studentsInfo[index].student_name;
    selectName.appendChild(newOption);
      
    }

}

createSelect();