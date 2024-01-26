/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Código da Condição de Pagamento:
1. À vista Débito, recebe 10% de desconto;
2. À vista no Dinheiro ou Pix, recebe 15% de desconto;
3. Em 2x, preço normal de etiqueta, sem juros;
4. Acima de 2x, preço normal de etiqueta mais juros de 10%

*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));
}

const valorEtiqueta = 100;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    console.log(aplicarDesconto(valorEtiqueta, 10));
} else if (condicaoPagamento === 2) {
    console.log(aplicarDesconto(valorEtiqueta, 15));
} else if (condicaoPagamento === 3) {
    console.log(valorEtiqueta);
} else {
    console.log(aplicarJuros(valorEtiqueta, 10));
}
