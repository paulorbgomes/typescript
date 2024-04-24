type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string): void {
    console.log(`ID: ${uuid} - Bem-vindo ${nome}`);
};

function logUsuario(uuid: Uuid): void {
    console.log(`Conta referente ao ID: ${uuid}`);
};

acessar(123, "Paulo R. B. Gomes");
acessar("55", "Henrique Alves");

logUsuario("123");