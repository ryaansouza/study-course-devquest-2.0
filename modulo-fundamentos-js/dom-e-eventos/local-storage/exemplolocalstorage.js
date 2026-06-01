localStorage.setItem("name", "Ryan");
localStorage.setItem("age", "20");

const usuario = {
    name: "Ryan", 
    age: 20,
    email: "ryansouza@gmail.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

const products = [
   { id: 1, nome: 'Produto 1', preco: 90 },
   { id: 2, nome: 'Produto 2', preco: 60 },
   { id: 3, nome: 'Produto 3', preco: 80 },
   { id: 4, nome: 'Produto 4', preco: 120 },
   { id: 5, nome: 'Produto 5', preco: 150 },
]

localStorage.setItem("products", JSON.stringify(products));

//Obtendo os dados do localStorage

const usarName = localStorage.getItem("name");
//console.log(usarName);

const userJson = localStorage.getItem("usuario");
//console.log(userJson);
//console.log(typeof userJson);

const userObject = JSON.parse(userJson);
//console.log(userObject);
//console.log(typeof userObject);

const productsJson = localStorage.getItem("products");
//console.log(productsJson);
//console.log(typeof productsJson);

const productsArray = JSON.parse(productsJson);
//console.log(productsArray);
//console.log(typeof productsArray);
//console.log(productsArray[0]);


//Removendo dados do localStorage individualmente.
localStorage.removeItem("name");

//Removendo todos os dados do localStorage.
localStorage.clear();