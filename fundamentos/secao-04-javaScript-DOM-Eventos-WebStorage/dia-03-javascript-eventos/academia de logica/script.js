const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6] // diagonal direita esquerda
]

function creatCells() {

  for (let index = 0; index < 9; index++) {
    const creat = document.createElement('div');
    creat.className = 'celula'
    creat.id = [index];
    const grid = document.querySelector('.grid');
    grid.appendChild(creat);

  }
}
creatCells();

function checkWho(turnPlayer) {
  
  for (const iterator of combinacoes) {
    for (const index of iterator) {
      const value = grid.children[index].innerHTML;
      console.log(value);

    }
  }

}

grid.children[0].innerHTML = 'X';

checkWho();