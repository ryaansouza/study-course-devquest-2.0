const usuario = {
    nome: 'Ryan',
    idade: 23
}

const {
    nome,
    idade,
    cidade = 'Desconhecida',
    ...resto
} = usuario;

const novoUsuario = {nome, idade, ...resto};

console.log(novoUsuario);





