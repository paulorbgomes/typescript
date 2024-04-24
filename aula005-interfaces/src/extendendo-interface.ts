interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
};

const left4dead: JogoProps = {
    id: "123",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de ação e tiro",
    plataforma: ["PS5", "PC"]
};

// console.log(left4dead);

interface DLC extends JogoProps {
    jogoOriginal: JogoProps;
    novoConteudo: string[];
};

const left4DeadDLC: DLC = {
    id: "90",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
    jogoOriginal: left4dead 
};

console.log(left4DeadDLC);