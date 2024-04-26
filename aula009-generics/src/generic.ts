// Generic em função
function repositorio<T>() {
    let dados: T;

    function getDados() {
        return dados;
    };

    function setDados(novoDado: T) {
        dados = novoDado;
    };

    return {getDados, setDados};
};

const repo1 = repositorio();
repo1.setDados(100);
repo1.setDados("100");
repo1.setDados(true);
console.log(repo1.getDados());