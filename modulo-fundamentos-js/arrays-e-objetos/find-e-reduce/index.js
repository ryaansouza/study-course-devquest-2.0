//O "find" ira buscar pelo primeiro elemento que satisfaça a condição passada na função de callback
//Se não encontrar nenhum elemento que satisfaça a condição, ira retornar "undefined"
//Ou seja, ira retornar apenas um elemento

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.find(numero => numero > 3 );
//console.log(resultado); //4

const resultadoReduce = numeros.reduce((acumulador, item) => {
    return acumulador + item;
}, 0); //0 é o valor inicial do acumulador
console.log(resultadoReduce); //15
