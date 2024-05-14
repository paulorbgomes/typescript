type Info = {
    id: number;
    nome: string;
    descricao?: string;
};

type Categoria = {
    slug: string;
    quantidadeProduto: number;
};

const produtoInfo: Info = {
    id: 123,
    nome: "Placa de Vídeo",
    descricao: "Placa GTX 2090"
};

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
};

//console.log(categoria1);

// Type Intersection
type ProdutoInfo = Info & Categoria;
const novoProduto: ProdutoInfo = {
    id: 54321,
    nome: "Teclado RGB",
    //descricao: "",
    slug: "teclado-mecânico",
    quantidadeProduto: 10
};

console.log(novoProduto);