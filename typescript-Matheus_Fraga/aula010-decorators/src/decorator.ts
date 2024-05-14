// Criação do decorator ...

// Decorator de classe ...
/*
function logInfo(target: any) {
    console.log("O sistema está online ...");
};*/

// Padrãoo factory (fábrica): função que irá retornar a criação do decorator.
function logInfo(mensagem: string) {
    return (target: any) => {
        console.log(`${mensagem}, ${target}`);
    }
};

@logInfo("Servidor está rodando ...")
class Sistema {
};