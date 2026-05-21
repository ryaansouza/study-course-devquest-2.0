// map - cria um novo array com base em um array existente

const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number, index) => {
//     console.log(index);
    
//     return number * 2;
// });
const doubledNumbers = numbers.map(number => number * 2); //versão reduzida

console.log(numbers);
console.log(doubledNumbers);


