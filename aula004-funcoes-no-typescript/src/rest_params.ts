/*
function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
    const total = venda1 + venda2 + venda3 + venda4;
    console.log(total);
    return total;
};

totalVendas(10, 30, 50, 10);
*/

function totalVendas(...vendas: number[]): number {
    let total: number = 0;
    for(const v of vendas) {
        total = total + v;
    };
    console.log(total);
    return total;
};

totalVendas(10, 30, 50, 10, 100, 200);

