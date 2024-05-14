/*
let loja: object;
loja = {
    nome: "BK",
    endereco: "Rua x",
    status: true
};
*/

interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
    //produtoPromocao: string;
};

const BurguerK: LojaProps = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
    //promocao: "Burguer Duplo"
    //produtoPromocao: "Burguer duplo"
};

console.log(BurguerK);
console.log(BurguerK.nome, BurguerK.endereco, BurguerK.status);

function novaLoja({nome, endereco, status}: LojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("============================");
};

novaLoja({nome: "Subway", endereco: "Rua x", status: true});