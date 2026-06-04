enum StatusPedido {
    Pendente = "Pendente",
    Pago = "Pago",
    Enviado = "Enviado"
}

let statusPedido: StatusPedido = StatusPedido.Pendente;
console.log(`Status do pedido: ${statusPedido}`);
