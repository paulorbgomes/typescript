"use strict";
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    ;
    function setDados(novoDado) {
        dados = novoDado;
    }
    ;
    return { getDados, setDados };
}
;
const repo1 = repositorio();
repo1.setDados(100);
repo1.setDados("100");
repo1.setDados(true);
console.log(repo1.getDados());
