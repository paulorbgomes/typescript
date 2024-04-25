"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    ;
    get getServidorIP() {
        console.log("=== Método GET ===");
        return this.servidor;
    }
    ;
    set setServidorIP(novoIp) {
        this.servidor = novoIp;
    }
    ;
}
;
const GTA5 = new Jogo("192.168.5.10");
console.log(GTA5.getServidorIP);
GTA5.setServidorIP = "192.200.250.9";
console.log(GTA5.getServidorIP);
