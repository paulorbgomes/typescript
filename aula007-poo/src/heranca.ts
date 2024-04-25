/*
Herança:
Ocorre quando uma classe herda atributos e métodos de outra classe.

Encapsulamento:
public, private, protected, readonly
*/

// Classe Usuario ...
class Usuario {
    // Atributos
    protected id: number;
    nome: string;
    email: string;

    // Construtor
    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    };
};

// Classe Admin ...
class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {
        // Chamada ao construtor da classe pai:
        super(id, nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    };

    protected mudarCargo(cargo: string): void {
        console.log("Alterando cargo para: ", cargo);
        console.log(`ID do Usuário: ${this.id}`);
    }

    acessarAdmin() {
        this.mudarCargo("Designer");
    }
};

// Instanciação ...
const usuario1 = new Admin(123, "Paulo", "paulo@email.com", "Programador", 2);

console.log(usuario1);
usuario1.acessarAdmin();