class Pessoa {
    readonly id: string = "123";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    };

    mostraID() {
        //this.id = "9999";
        console.log(`ID Número: ${this.id}`);
    };
};

const ana = new Pessoa("Ana Carol", 30);
ana.mostraID();
console.log(ana.id);
console.log(ana);