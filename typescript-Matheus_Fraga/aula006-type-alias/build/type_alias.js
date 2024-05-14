"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem-vindo ${nome}`);
}
;
function logUsuario(uuid) {
    console.log(`Conta referente ao ID: ${uuid}`);
}
;
acessar(123, "Paulo R. B. Gomes");
acessar("55", "Henrique Alves");
logUsuario("123");
