"use strict";
async function searchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}
async function renderProducts() {
    try {
        const dataProducts = await searchProducts();
        dataProducts.forEach((product) => {
            console.log(`Titulo: ${product.title}`);
            console.log(`Preço: ${product.price}`);
        });
    }
    catch (error) {
        console.error("Ocorreu um erro ao buscar produtos:", error);
    }
}
renderProducts();
