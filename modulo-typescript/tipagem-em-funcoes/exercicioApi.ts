type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

async function searchProducts() : Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();
}

async function renderProducts() {
    try {
        const dataProducts: Product[] = await searchProducts();
        dataProducts.forEach((product: Product) => {
            console.log(`Titulo: ${product.title}`);
            console.log(`Preço: ${product.price}`);
        })
    } catch (error) {
        console.error("Ocorreu um erro ao buscar produtos:", error);
    }
}

renderProducts();