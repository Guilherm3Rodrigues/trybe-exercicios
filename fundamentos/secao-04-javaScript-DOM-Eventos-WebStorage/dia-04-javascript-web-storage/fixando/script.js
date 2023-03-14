const sectionBackground = document.querySelector('#background-color');
const sectionFontColor = document.querySelector('#font-color');
const sectionFontSize = document.querySelector('#font-size');

const buttonsBackground = sectionBackground.querySelectorAll('button');

const buttonsFontColor = sectionFontColor.querySelectorAll('button');

const buttonsFontSize = sectionFontSize.querySelectorAll('button');




function backgroundColor() {

    for (let index = 0; index < buttonsBackground.length; index += 1) {

        buttonsBackground[index].addEventListener('click', (event) => {
            const target = event.target;


            if (target.innerHTML === 'white') {
                document.body.style.backgroundColor = 'white';

            }
            if (target.innerHTML === 'black') {
                document.body.style.backgroundColor = 'black';

            }
            if (target.innerHTML === 'green') {
                document.body.style.backgroundColor = 'green';

            }
            if (target.innerHTML === 'blue') {
                document.body.style.backgroundColor = 'blue';

            }
            if (target.innerHTML === 'yellow') {
                document.body.style.backgroundColor = 'yellow';

            }

        })
    }
}

backgroundColor();

function fontColor() {

    for (let index = 0; index < buttonsFontColor.length; index += 1) {

        buttonsFontColor[index].addEventListener('click', (event) => {
            const target = event.target;
            const main = document.querySelector('main');

            if (target.innerHTML === 'white') {

                main.style.color = 'white';

            }
            if (target.innerHTML === 'black') {
                main.style.color = 'black';

            }
            if (target.innerHTML === 'red') {
                main.style.color = 'red';

            }

        })
    }

}

fontColor();



function fontSize() {

    for (let index = 0; index < buttonsFontSize.length; index += 1) {

        buttonsFontSize[index].addEventListener('click', (event) => {

            const target = event.target;
            const paragraph = document.querySelector('.paragraph');

            if (target.innerHTML === '8pt') {
                paragraph.style.fontSize = '8pt'
            }
            if (target.innerHTML === '10pt') {
                paragraph.style.fontSize = '10pt'
            }
            if (target.innerHTML === '12pt') {
                paragraph.style.fontSize = '12pt'
            }
            if (target.innerHTML === '14pt') {
                paragraph.style.fontSize = '14pt'
            }
            if (target.innerHTML === '20pt') {
                paragraph.style.fontSize = '20pt'
            }
        })
    }
}

fontSize();






