//Uma funcão genérica é uma função que pode trabalhar com diferentes tipos de dados, sem perder a segurança de tipo. Ela é definida usando um parâmetro de tipo genérico, que é representado por uma letra maiúscula (geralmente T, mas pode ser qualquer letra). O parâmetro de tipo genérico é substituído pelo tipo real quando a função é chamada.
function makeArray<T>(item: T): T[] {
    return [item];
}

const numbers = makeArray(10);
const names = makeArray('Ryan');

console.log(numbers);
console.log(names);

