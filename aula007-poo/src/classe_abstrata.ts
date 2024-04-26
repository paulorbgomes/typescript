type DadosConta = {
    nome: string;
    numero: string;
    endereco: string;
};

// Classe Abstrata
abstract class ContaBanco {
    abstract abrirConta(dados: DadosConta): boolean;
};

// Classe Concreta
class PessoaFisica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log("==========");
        console.log(`Nova conta P. Física criada com sucesso: ${dados.nome}`);
        console.log("==========");
        return true;
    };
};

const pessoa1 = new PessoaFisica();
pessoa1.abrirConta({nome: "Paulo", numero: "123", endereco: "Fortaleza-CE"});