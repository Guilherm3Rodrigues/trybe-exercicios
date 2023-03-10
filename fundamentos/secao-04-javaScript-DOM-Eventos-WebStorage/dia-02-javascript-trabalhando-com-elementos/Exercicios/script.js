const body = document.querySelector('body');
const main = document.createElement('main');
const section = document.createElement('section');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');
const createElement = document.createElement('h1');
const h3One = document.createElement('h3');
const h3Two = document.createElement('h3');
const h3Three = document.createElement('h3');
const paragraph = document.createElement('p');
const img = document.createElement('img');
const listUl = document.createElement('ul');





createElement.innerHTML = 'TrybeTrip - Agencia de Viagens';
createElement.className = 'title';
body.appendChild(createElement);


main.classList = 'main-content';

body.appendChild(main);




section.classList = 'center-content';
main.appendChild(section);

section.appendChild(paragraph);


sectionLeft.classList = 'left-content';
main.appendChild(sectionLeft);


sectionRight.classList = 'right-content';
main.appendChild(sectionRight);


img.src = 'https://picsum.photos/200';
img.classList = 'small-image'
sectionLeft.appendChild(img);


sectionRight.appendChild(listUl);

for (let index = 1; index <= 8; index+=1) {
    const listLi = document.createElement('li');
    listLi.innerHTML = index;
    sectionRight.appendChild(listLi);    
}

h3One.className = 'description';
h3Two.className = 'description';
h3Three.className = 'description';

main.appendChild(h3One);
main.appendChild(h3Two);
main.appendChild(h3Three);

main.removeChild(sectionLeft);

section.style.backgroundColor = 'green';
sectionRight.style.marginRight = 'auto'


