"use strict";
function totalVendas(...vendas) {
    let total = 0;
    for (const v of vendas) {
        total = total + v;
    }
    ;
    console.log(total);
    return total;
}
;
totalVendas(10, 30, 50, 10, 100, 200);
