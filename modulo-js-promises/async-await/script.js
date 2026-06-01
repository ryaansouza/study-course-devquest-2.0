const orderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviado para cozinha...");
        
        setTimeout(() => {
            resolve("Pizza pronta!")
        }, 3000);
    });
};

//simular uma api que entrega a pizza.
const deliverPizza = () => {
    return new Promise((resolve) => {
        console.log("A pizza esta a caminho");
        
        setTimeout(() => {
            resolve("Pizza entregue!");
        }, 3000);
    });
};



const makeOrder = async () => {
    const pizzaMessage = await orderPizza();
    console.log(pizzaMessage);

    const deliveryMessage = await deliverPizza();
    console.log(deliverPizza);
}
makeOrder();