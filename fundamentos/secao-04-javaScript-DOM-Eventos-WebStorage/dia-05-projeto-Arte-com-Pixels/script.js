const palettes = document.querySelectorAll('.color');
const random = document.querySelector('#rdmColor');
const artPicture = document.getElementsByClassName('board')



// ============== criando-quadro-pixel =======================//

const picture = document.querySelector('#section-main');
picture.classList.add('picture');

const colunas = 10;
const linhas = 10;

for (let index = 0; index < linhas; index += 1) {
    const section = document.createElement('section');
    section.classList.add('board');

    for (let index = 0; index < colunas; index += 1) {
        let classPixel = index + 1;


        const pixel = document.createElement('div');
        pixel.className = 'box';
        pixel.classList.add(classPixel);
        section.appendChild(pixel);
    }
    picture.appendChild(section);
}


//=================== cores das paletas ================== //


for (let index = 0; index < palettes.length; index += 1) {

    palettes[index].innerHTML = index;
    palettes[index].innerHTML = index;
    palettes[index].innerHTML = index;
    palettes[index].innerHTML = index;

    if (palettes[index].innerHTML === '0') {
        palettes[index].style.backgroundColor = 'black'
        palettes[index].style.color = 'rgb(0,0,0,0)'
    }
    if (palettes[index].innerHTML === '1') {
        palettes[index].classList.add('yellow');
        palettes[index].style.backgroundColor = 'yellow';
        palettes[index].style.color = 'rgb(0,0,0,0)'
    }
    if (palettes[index].innerHTML === '2') {
        palettes[index].classList.add('blue');
        palettes[index].style.backgroundColor = 'blue';
        palettes[index].style.color = 'rgb(0,0,0,0)'
    }
    if (palettes[index].innerHTML === '3') {
        palettes[index].classList.add('red');
        palettes[index].style.backgroundColor = 'red';
        palettes[index].style.color = 'rgb(0,0,0,0)'
    }
}

// =================== select a color ================ //


function randomColors() {

    for (let index = 0; index < palettes.length; index += 1) {
        random.addEventListener('click', () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            if (palettes[index].classList.contains('yellow')) {
                box1 = palettes[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                localStorage.setItem('color1', box1);
            }
            if (palettes[index].classList.contains('blue')) {
                box2 = palettes[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                localStorage.setItem('color2', box2);
            }
            if (palettes[index].classList.contains('red')) {
                box3 = palettes[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                localStorage.setItem('color3', box3);
            }
        });
    }
}

randomColors();

// =================== save paletta ================ //

function loadColor() {
    const color0 = localStorage.getItem('color0');
    const color1 = localStorage.getItem('color1');
    const color2 = localStorage.getItem('color2');
    const color3 = localStorage.getItem('color3');

    if (color0) {
        const pal0 = document.querySelector('.black');
        pal0.style.backgroundColor = color0;
    }
    if (color1) {
        const pal1 = document.querySelector('.yellow');
        pal1.style.backgroundColor = color1;
    }
    if (color2) {
        const pal2 = document.querySelector('.blue');
        pal2.style.backgroundColor = color2;
    }
    if (color3) {
        const pal3 = document.querySelector('.red');
        pal3.style.backgroundColor = color3;
    }
}
loadColor();

function paint() {
    for (let index = 0; index < artPicture.length; index += 1) {

        artPicture[index].addEventListener('click', (event) => {
            const target = event.target;

            if (target.classList.contains('board')) {
                console.log('aqui nao mané');
            } else {
                if (target.classList.contains('selected')) {
                    console.log('atualizado?');
                    target.style.backgroundColor = colorSelect;

                } else {
                    target.classList.add('selected');
                    console.log('selected adicionado');
                    target.style.backgroundColor = colorSelect;
                }
            }
        })
    }
}

paint()

let colorSelect = 'black';

function selectColor() {
    for (let index = 0; index < palettes.length; index += 1) {

        palettes[index].addEventListener('click', (event) => {
            const target = event.target;
            console.log(target.style.backgroundColor);
            colorSelect = target.style.backgroundColor;
            console.log(colorSelect);
        })
    }
}

selectColor();