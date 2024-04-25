"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`);
    }
    ;
    emitirPedido(mesa, ...pedidos) {
        for (let p of pedidos) {
            console.log(`Saindo novo pedido: ${p}`);
        }
        return `Pedido da mesa: ${mesa} ...`;
    }
    ;
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("Loja ABERTA com sucesso!");
        }
        else {
            console.log("Loja FECHADA!");
        }
    }
}
;
const redBurguer = new Loja("Red Burguer", "Lanches");
redBurguer.criarLoja();
redBurguer.emitirPedido(34, "X-Bacon", "Refrigerante");
redBurguer.mudarStatus("ABERTO");
redBurguer.mudarStatus("FECHADO");
