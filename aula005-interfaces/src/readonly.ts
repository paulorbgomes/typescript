interface ProdutoProps {
    readonly id: string;
    nome: string;
    descricao: string;
};

let produto1: ProdutoProps = {
    id: "1",
    nome: "Tenis Nike",
    descricao: "Super tenis descolado ..." 
};

//produto1.id = "123";
console.log(produto1);
produto1.nome = "Tenis Nike 2.0";
console.log(produto1);
console.log(produto1.id);