"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    ;
}
;
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    ;
    mudarCargo(cargo) {
        console.log("Alterando cargo para: ", cargo);
        console.log(`ID do Usuário: ${this.id}`);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
;
const usuario1 = new Admin(123, "Paulo", "paulo@email.com", "Programador", 2);
console.log(usuario1);
usuario1.acessarAdmin();
