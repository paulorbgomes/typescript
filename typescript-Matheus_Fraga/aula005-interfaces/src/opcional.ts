interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
};

const novoUsuario: CadastroProps = {
    //nome: "Paulo R. B. Gomes",
    email: "email@teste.com",
    status: false
};

console.log(novoUsuario);