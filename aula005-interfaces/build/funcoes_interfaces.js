"use strict";
;
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
}
;
const novoCurso = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 750,
    promocao: mostraPromocao
};
console.log(novoCurso);
console.log(novoCurso.promocao(350));
