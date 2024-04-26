const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const buttonSomar = document.getElementById("buttonSomar") as HTMLElement;
const buttonSubtrair = document.getElementById("buttonSubtrair") as HTMLElement;
const output = document.getElementById("output") as HTMLElement;

type Operacoes = "somar" | "subtrair";

interface Valores {
    tipo: Operacoes;
    a: number;
    b: number;
};

function operacao({tipo, a, b}: Valores) {
    if(tipo === "somar") {
        return a + b;
    } else if(tipo === "subtrair") {
        return a - b;
    }
};

buttonSomar.addEventListener("click", () => {
    const resultado = operacao({tipo: "somar", a: Number(input1.value), b: Number(input2.value)});
    output.innerHTML = `<strong>Soma:</strong> ${resultado}`;
});

buttonSubtrair.addEventListener("click", () => {
    const resultado = operacao({tipo: "subtrair", a: Number(input1.value), b: Number(input2.value)});
    output.innerHTML = `<strong>Subtração:</strong> ${resultado}`;
});