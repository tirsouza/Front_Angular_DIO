/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Código da Condição de Pagamento:
1. À vista Débito, recebe 10% de desconto;
2. À vista no Dinheiro ou Pix, recebe 15% de desconto;
3. Em 2x, preço normal de etiqueta, sem juros;
4. Acima de 2x, preço normal de etiqueta mais juros de 10%

*/

let valorEtiqueta = 100;

const vistaDebito = valorEtiqueta*0.9;
const vistaDinheiroOuPix = valorEtiqueta*0.85;
const parcela2X = valorEtiqueta;
const acimaParcela2X = valorEtiqueta*1.10;

let condicaoPagamento = 1;

if (condicaoPagamento === 1) {
    console.log('O valor pago é ', vistaDebito.toFixed(2));
} else if (condicaoPagamento === 2) {
    console.log('O valor pago é ', vistaDinheiroOuPix.toFixed(2));
} else if (condicaoPagamento === 3) {
    console.log('O valor pago é ', parcela2X.toFixed(2));
} else {
    console.log('O valor pago é ', acimaParcela2X.toFixed(2));
}