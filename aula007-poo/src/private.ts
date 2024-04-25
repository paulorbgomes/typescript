class Conta {
    private limite: number = 450;

    private aumentarLimite(quantidade: number) {
        if(quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
    };

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean {
        if(estaAutenticado) {
            this.aumentarLimite(quantidade);
        } else {
            return false;
        }
    };
};

const fulano = new Conta();

//fulano.limite = 1500;
//fulano.aumentarLimite(1000);

fulano.solicitarLimiteApp(true, 700);

console.log(fulano);