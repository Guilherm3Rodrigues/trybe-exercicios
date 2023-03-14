const sectionBackground = document.querySelector('#background-color');
const sectionFontColor = document.querySelector('#font-color')

const buttonsBackground = sectionBackground.querySelectorAll('button');

const buttonsFontColor = sectionFontColor.querySelectorAll('button');
console.log(buttonsFontColor);




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









