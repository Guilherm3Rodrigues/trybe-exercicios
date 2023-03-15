const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

const container = document.querySelector('.container')
document.querySelector('.container').querySelectorAll('li').forEach((li) => {
  li.onclick = changeTech
  
})

const div1 = document.createElement('div')
const div2 = document.createElement('div')

container.append(div1, div2)
// container.appendChild(div1)
// container.appendChild(div2)




// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function changeTech(event) {
  const li = container.querySelector('.tech');
  li.classList.remove('tech');
  event.target.classList.add('tech');
}

firstLi.addEventListener('click', (changeTech));
secondLi.addEventListener('click', (changeTech));
thirdLi.addEventListener('click', (changeTech));

//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteredText(event) {
  const ul = document.querySelector('.tech');
  ul.innerText = event.target.value;
}

input.addEventListener('input', alteredText);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

function linkDirect() {
  window.location.href = 'http://wol.jw.org/pt/wol/h/r5/lp-t' 

}

myWebpage.addEventListener('dblclick', linkDirect);





// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
  event.target.style.color = 'red';
}

myWebpage.addEventListener('mouseover', changeColor);




// Segue abaixo um exemplo do uso de event.target:


const html = `
<div class="red">
  <h1>TITULO</h1>
</div>
`

container.addEventListener('click', (event) => {
  console.log(event.currentTarget)
  event.target.innerHTML = ''
})



const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.