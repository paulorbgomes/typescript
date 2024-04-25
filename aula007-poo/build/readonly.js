"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    ;
    mostraID() {
        console.log(`ID Número: ${this.id}`);
    }
    ;
}
;
const ana = new Pessoa("Ana Carol", 30);
ana.mostraID();
console.log(ana.id);
console.log(ana);
