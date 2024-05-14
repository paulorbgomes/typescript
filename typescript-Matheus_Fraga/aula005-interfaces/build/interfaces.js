"use strict";
;
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
};
console.log(BurguerK);
console.log(BurguerK.nome, BurguerK.endereco, BurguerK.status);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("============================");
}
;
novaLoja({ nome: "Subway", endereco: "Rua x", status: true });
