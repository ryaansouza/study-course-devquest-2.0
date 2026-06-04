interface IUsuario {
    id: number;
    name: string;
    mail: string;
}

const user: IUsuario = {
    id: 1,
    name: 'Ronaldo',
    mail: 'email@hotmail.com'
}

console.log(`ID: ${user.id}`);
console.log(`Nome: ${user.name}`);
console.log(`Email: ${user.mail}`);
