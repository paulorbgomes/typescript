type Connection = {
    ip: string;
    name: string;
};

export function connection(info: Connection): boolean {
    console.log("Conexão com o BD realizada com sucesso ... ", info.ip);
    return true;
};

export function statusConnection(): void {
    console.log("Servidor funcionando 100% ...");
};
