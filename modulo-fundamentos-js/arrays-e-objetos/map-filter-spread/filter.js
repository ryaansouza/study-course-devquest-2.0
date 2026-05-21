// filter - vai filtrar os eleentos de um array com base em uma condição

const products = [
    { id: 1, name: 'Notebook', price: 3000 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Keyboard', price: 50 },
    { id: 4, name: 'Monitor', price: 700 },
    { id: 5, name: 'Chair', price: 150 }
];

// const priceGreaterThanOneHundred = products.filter(product => {
//     if (product.price > 100){
//         return product;
//     }
// });

//versão reduzida
const priceGreaterThanOneHundred = products.filter(product => product.price > 100);
console.log(priceGreaterThanOneHundred);