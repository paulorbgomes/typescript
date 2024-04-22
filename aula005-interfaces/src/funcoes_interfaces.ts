interface CursoProps {
    id: string;
    nome: string;
    preco: number;

    // Definir apenas a função e o que ela deve esperar e retornar
    promocao: (preco: number) => void; 
};

function mostraPromocao(preco: number): void {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
};

const novoCurso: CursoProps = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 750,
    promocao: mostraPromocao
};

console.log(novoCurso);
console.log(novoCurso.promocao(350));