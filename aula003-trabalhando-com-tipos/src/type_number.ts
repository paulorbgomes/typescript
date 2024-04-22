// Type number: int, float, hex, binary
let valor1: number = 100;
valor1 = 20.90;
console.log(valor1);

let valor2: number;
valor2 = 10;
console.log(valor2);
console.log(valor1 + valor2);

function soma(n1: number, n2:number): number {
    return n1 + n2;
};
console.log(soma(valor1, valor2));