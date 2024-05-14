"use strict";
class ContaBanco {
}
;
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("==========");
        console.log(`Nova conta P. Física criada com sucesso: ${dados.nome}`);
        console.log("==========");
        return true;
    }
    ;
}
;
const pessoa1 = new PessoaFisica();
pessoa1.abrirConta({ nome: "Paulo", numero: "123", endereco: "Fortaleza-CE" });
