const orderPizza = (hasIngredients) => {
    return new Promise((resolve, reject) => {
        console.log("Pedido da pizza enviado para cozinha...");

        if (!hasIngredients){
            reject(new Error("Ingredientes insuficientes."));
            return;
        }
        
        setTimeout(() => {
            //simulando uma chance de 40% de ocorrer um erro.
            const hasErrors = Math.random() < 0.4;
            if (hasErrors) {
                reject("Erro ao preparar a pizza.");
            } else {
                resolve("Pizza pronta!");
            }
        }, 1000);
    });
};

const orderPizzaAlt = async (hasIngredients) => {
    console.log("Pedido da pizza enviado para cozinha...");

    if (!hasIngredients){
        throw new Error("Ingredientes insuficientes.");
    }

    return new Promise((resolve, reject) => 
        setTimeout(() => {
            //simulando uma chance de 40% de ocorrer um erro.
            const hasErrors = Math.random() < 0.2;
            if (hasErrors) {
                reject(new Error("Erro ao preparar a pizza."));
            } else {
                resolve("Pizza pronta!");
            }
        }, 1000)
    );
};

const makeOrder = async () => {
    try {
        const pizzaMessage = await orderPizzaAlt(true);
        console.log(pizzaMessage);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    } finally {
        console.log("Pedido finalizado!");
    }
}

makeOrder();