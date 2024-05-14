/*
O que é uma classe?
Uma classe armazena as características e as ações que esse objeto vai possuir.
Ou seja, conjunto de atributos e métodos.
*/
type Status = "ABERTO" | "FECHADO";

class Loja {

    // Atributos
    nome: string;
    categoria: string;

    // Construtor
    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }  

    // Métodos Personalizados
    criarLoja(): void {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`);
    };

    //emitirPedido(mesa: number): string {
    //    return `Pedido da mesa: ${mesa} ...`;
    //};

    emitirPedido(mesa: number, ...pedidos: string[]): string {
        for(let p of pedidos) {
            console.log(`Saindo novo pedido: ${p}`);
        }
        return `Pedido da mesa: ${mesa} ...`;
    };

    mudarStatus(status: Status): void {
        if(status === "ABERTO") {
            console.log("Loja ABERTA com sucesso!");
        } else {
            console.log("Loja FECHADA!");
        }
    }
 
};

const redBurguer = new Loja("Red Burguer", "Lanches");
redBurguer.criarLoja();
//console.log(redBurguer.emitirPedido(34));
redBurguer.emitirPedido(34, "X-Bacon", "Refrigerante");
redBurguer.mudarStatus("ABERTO");
redBurguer.mudarStatus("FECHADO");
