"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const buttonSomar = document.getElementById("buttonSomar");
const buttonSubtrair = document.getElementById("buttonSubtrair");
const output = document.getElementById("output");
;
function operacao({ tipo, a, b }) {
    if (tipo === "somar") {
        return a + b;
    }
    else if (tipo === "subtrair") {
        return a - b;
    }
}
;
buttonSomar.addEventListener("click", () => {
    const resultado = operacao({ tipo: "somar", a: Number(input1.value), b: Number(input2.value) });
    output.innerHTML = `<strong>Soma:</strong> ${resultado}`;
});
buttonSubtrair.addEventListener("click", () => {
    const resultado = operacao({ tipo: "subtrair", a: Number(input1.value), b: Number(input2.value) });
    output.innerHTML = `<strong>Subtração:</strong> ${resultado}`;
});
