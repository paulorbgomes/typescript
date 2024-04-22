// Como deixar um valor por default ou deixar ele opcional em uma funcao?

function cadastro(email: string, senha:string, nome = "Aluno", idade?: number): void {
    let data = {
        email,
        senha,
        nome,
        idade
    };

    console.log(data);
};

cadastro("teste@teste.com", "123123", "Paulo");
cadastro("teste@teste.com", "123123");
cadastro("teste@teste.com", "123123", "Paulo", 34);
