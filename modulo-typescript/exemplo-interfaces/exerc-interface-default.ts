interface IUser {
    name: string;
    age: number;
    sex?: string;
}

function showUserInfo({name, age, sex = 'masculino'}: IUser) {
    console.log(`Nome: ${name}`);
    console.log(`Idade: ${age}`);
    console.log(`Genero: ${sex}`);
}

showUserInfo({ name: 'John', age: 33, sex: 'feminino'});
showUserInfo({ name: 'João', age: 20 });
