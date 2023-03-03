const menu = {
  sanduiches: [
    {
      name: 'Big Mac',
      price: 26.90,
      ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
      calories: 503,
    },
    {
      name: 'Duplo Quarterão',
      price: 39.90,
      ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
      calories: 762,
    },
    {
      name: 'Big Tasty',
      price: 39.90,
      ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
      calories: 944,
    },
  ],
  acompanhamentos: [
    {
      name: 'Chicken McNuggets - 10 unidades',
      price: 16.90,
      ingredients: ['frango empanado'],
      calories: 414,
    },
    {
      name: 'McFritas Kids',
      price: 8.90,
      ingredients: ['batata', 'sal'],
      calories: 90,
    },
    {
      name: 'McFritas Pequena',
      price: 11.90,
      ingredients: ['batata', 'sal'],
      calories: 211,
    },
    {
      name: 'McFritas Média',
      price: 13.90,
      ingredients: ['batata', 'sal'],
      calories: 295,
    },
    {
      name: 'McFritas Grande',
      price: 15.90,
      ingredients: ['batata', 'sal'],
      calories: 422,
    },
  ],
  sobremesas: [
    {
      name: 'McFlurry Ovomaltine Caramelo',
      price: 13.90,
      ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
      calories: 462,
    },
    {
      name: 'Top Sundae Chocolate',
      price: 11.90,
      ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
      calories: 377,
    },
    {
      name: 'Torta de Banana',
      price: 6.90,
      ingredients: ['banana', 'massa crocante'],
      calories: 222,
    },
  ],
  bebidas: [
    {
      name: 'Coca-Cola 300ml',
      price: 13.90,
      calories: 129,
    },
    {
      name: 'Del Valle Uva 500ml',
      price: 11.90,
      calories: 200,
    }
  ],
}

// 1 - Adiciona um novo objeto no array sanduiches.

const newItem = {
  name: 'X-Infarto',
  price: 57.90,
  ingredients: ['42 hambúrgueres', 'queijo cheddar', 'molho especial', 'cebola', 'azeitona preta', 'pão', 'bacon', '7 ovos', 'calabresa'],
  calories: 45800,
};

menu.sanduiches.push(newItem);

// console.log(menu.sanduiches);

// ================================================

/* 
02 - Adicionar a propriedade 'isExpensive' para todos os elementos 
de uma categoria do menu.
Caso o preço do elemento seja maior que um valor estipulado, a propriedade
'isExpensive' recebe o valor 'Muito caro!', senão, recebe o valor 'Tá de boa!'.
*/

function addProperty (category, value) {
  for (let index = 0; index < menu[category].length; index += 1) {
    const item = menu[category][index];
    // if (item.price >= value) {
    //   item['isExpensive'] = 'Muito caro!';
    // } else {
    //   item.isExpensive = 'Tá de boa!';
    // }

    item['isExpensive'] = (item.price >= value) ? 'Muito caro!' : 'Tá de boa!';

  }
}

addProperty('sanduiches', 27);

// console.log(menu.sanduiches);

// ================================================

// 03 - Descubra qual é o produto mais caro de acordo com a categoria.


const moreExpensive = (object, category, value) => {

    let biggestPrice = object[category][0].price;

    for (let index = 1; index < object[category].length; index+= 1) {
     
        object[category][index].price > biggestPrice ? biggestPrice = object[category][index].price : null ;
        
    }

    return biggestPrice;
    
}

console.log(moreExpensive(menu, 'bebidas'));







// ================================================















/*
4 - Crie uma forma que permita cadastrar novos itens ao menu.
O novo item deve seguir o seguinte padrão:
{
  name: 'Nome do item',
  price: 'Preço do item',
  calories: 'Calorias do item',
}
Não é permitido adicionar itens que já estejam no menu.
*/
