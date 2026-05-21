//Desestruturação de objetos

const user = {
    name: 'Alice',
    age: 30,
    address: {
        street: 'Rua Principal',
        number: 123
    }
}

// //forma mais leiga e iniciante de recuperar os valores:
// const name = user.name;
// const age = user.age;
// const street = user.address.street;
// const number = user.address.number;
// console.log(name, age, street, number);

const {
    name: clientName,
    age,
    phone = '999999999', //valor padrão
    address: {street, number}
} = user;  //dentro das chaves, colocamos o que queremos extrair
console.log(clientName, age, phone, street, number);


//forma tradicional
// const showAge = (user) => {
//     console.log(user.age);
// }
// showAge(user);

//forma com desestruturação
const showAge = ({age}) => {
    console.log(age);
}
showAge(user);