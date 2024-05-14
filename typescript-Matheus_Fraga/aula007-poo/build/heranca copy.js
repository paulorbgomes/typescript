"use strict";
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    ;
}
;
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    ;
}
;
const usuario1 = new Admin("Paulo", "paulo@email.com", "Programador", 2);
console.log(usuario1);
console.log(usuario1.nome);
console.log(usuario1.email);
console.log(usuario1.cargo);
console.log(usuario1.nivel);
