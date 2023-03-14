const sectionBackground = document.querySelector('#background-color');
const sectionFontColor = document.querySelector('#font-color');
const sectionFontSize = document.querySelector('#font-size');
const sectionLineHeight = document.querySelector('#line-height');
const sectionFontFamily = document.querySelector('#font-family');

const buttonsBackground = sectionBackground.querySelectorAll('button');

const buttonsFontColor = sectionFontColor.querySelectorAll('button');

const buttonsFontSize = sectionFontSize.querySelectorAll('button');

const buttonsLineHeight = sectionLineHeight.querySelectorAll('button');

const buttonsFontFamily = sectionFontFamily.querySelectorAll('button');

// ================= save configs ============================// 

function loadSettings() {
    const backgroundColor = localStorage.getItem('backgroundColor');
    const fontColor = localStorage.getItem('fontColor');
    const fontSize = localStorage.getItem('fontSize');
    const lineHeight = localStorage.getItem('lineHeight');
    const typeFont = localStorage.getItem('typeFont')

    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }
    if (fontColor) {
        const main = document.querySelector('main');
        main.style.color = fontColor;
    }
    if (fontSize) {
        const font = document.querySelector('.paragraph') 
        font.style.fontSize = fontSize;
    }
    if (lineHeight) {
        const line = document.querySelector('.paragraph') 
        line.style.lineHeight = lineHeight;
    }
    if (typeFont) {
         
        document.body.style.fontFamily = typeFont;
    }

}

loadSettings();


// ======================= background - color ===================================

function backgroundColor() {

    for (let index = 0; index < buttonsBackground.length; index += 1) {

        buttonsBackground[index].addEventListener('click', (event) => {
            const target = event.target;
            const value = target.getAttribute('data-value');

            if (target.innerHTML === 'white') {
                const value = document.body.style.backgroundColor = 'white';
                localStorage.setItem('backgroundColor', value);
            }
            if (target.innerHTML === 'black') {
                const value = document.body.style.backgroundColor = 'black';
                localStorage.setItem('backgroundColor', value);
            }
            if (target.innerHTML === 'green') {
                const value = document.body.style.backgroundColor = 'green';
                localStorage.setItem('backgroundColor', value);
            }
            if (target.innerHTML === 'blue') {
                const value = document.body.style.backgroundColor = 'blue';
                localStorage.setItem('backgroundColor', value);
            }
            if (target.innerHTML === 'yellow') {
                const value = document.body.style.backgroundColor = 'yellow';
                localStorage.setItem('backgroundColor', value);
            }
        })
    }
}

backgroundColor();



// ======================= font - color ===================================

function fontColor() {

    for (let index = 0; index < buttonsFontColor.length; index += 1) {
        
        buttonsFontColor[index].addEventListener('click', (event) => {
            const target = event.target;
            

            if (target.innerHTML === 'white') {
                const value = document.body.style.color = 'white';
                localStorage.setItem('fontColor', value);
            }
            if (target.innerHTML === 'black') {
                const value = document.body.style.color = 'black';
                localStorage.setItem('fontColor', value);
            }
            if (target.innerHTML === 'red') {
                const value = document.body.style.color = 'red';
                localStorage.setItem('fontColor', value);
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
                const value = paragraph.style.fontSize = '8pt'
                localStorage.setItem('fontSize', value);
            }
            if (target.innerHTML === '10pt') {
                const value = paragraph.style.fontSize = '10pt'
                localStorage.setItem('fontSize', value);
            }
            if (target.innerHTML === '12pt') {
                const value = paragraph.style.fontSize = '12pt'
                localStorage.setItem('fontSize', value);
            }
            if (target.innerHTML === '14pt') {
                const value = paragraph.style.fontSize = '14pt'
                localStorage.setItem('fontSize', value);
            }
            if (target.innerHTML === '20pt') {
                const value = paragraph.style.fontSize = '20pt'
                localStorage.setItem('fontSize', value);
            }
        })
    }
}

fontSize();

function lineHeight() {

    for (let index = 0; index < buttonsLineHeight.length; index += 1) {

        buttonsLineHeight[index].addEventListener('click', (event) => {

            const target = event.target;
            const paragraph = document.querySelector('.paragraph');

            if (target.innerHTML === '1') {
                const value = paragraph.style.lineHeight = '1'
                localStorage.setItem('lineHeight', value);
            }
            if (target.innerHTML === 'normal') {
                const value = paragraph.style.lineHeight = 'normal'
                localStorage.setItem('lineHeight', value);
            }
            if (target.innerHTML === '1.5') {
                const value = paragraph.style.lineHeight = '1.5'
                localStorage.setItem('lineHeight', value);
            }
            if (target.innerHTML === '2.0') {
                const value = paragraph.style.lineHeight = '2'
                localStorage.setItem('lineHeight', value);
            }
            if (target.innerHTML === '3.0') {
                const value =  paragraph.style.lineHeight = '3'
                localStorage.setItem('lineHeight', value);
            }
        })
    }
}

lineHeight();

function typeFont() {

    for (let index = 0; index < buttonsFontFamily.length; index += 1) {

        buttonsFontFamily[index].addEventListener('click', (event) => {
            const target = event.target;

            if (target.innerHTML === 'Arial') {
                const value = document.body.style.fontFamily = 'Arial';
                localStorage.setItem('typeFont', value);
                
            }
            if (target.innerHTML === 'Times New Roman') {
                const value = document.body.style.fontFamily = 'Times New Roman';
                localStorage.setItem('typeFont', value);
            }

        })
    }
}

typeFont();


