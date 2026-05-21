const input = document.getElementById("nome");
const button = document.getElementById("btn");
const formBusca = document.getElementById("form-busca");

button.addEventListener("click", () => {
    console.log("Clicou");
});

input.addEventListener("input", () => {
    console.log(input.value);
});

formBusca.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(input.value);
});