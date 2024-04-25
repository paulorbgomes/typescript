class Jogo {
    private servidor: string;
    private id: string = "1234";

    constructor(servidor: string) {
        this.servidor = servidor;
    };

    get getServidorIP() {
        console.log("=== Método GET ===");
        return this.servidor;
    };

    set setServidorIP(novoIp: string) {
        this.servidor = novoIp;
    };
};

const GTA5 = new Jogo("192.168.5.10");

// Não é possível pois os atributos são private ...
//GTA5.servidor;
//GTA5.id;

//console.log(GTA5);

console.log(GTA5.getServidorIP);
GTA5.setServidorIP = "192.200.250.9";
console.log(GTA5.getServidorIP);